const { HttpError } = require("../../helpers");
const { Ingredient } = require("../../models/ingredient");
const { Recipe } = require("../../models/recipe");

const getRecipesByIngredient = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const { ingredient } = req.params;

  const skip = (page - 1) * limit;

  const result1 = await Ingredient.find({ ttl: ingredient });
  if (result1.length === 0 || !result1) {
    throw HttpError(404);
  }
  const result = await Recipe.aggregate([
    {
      $match: {
        ingredients: {
          $elemMatch: {
            id: result1[0]._id,
          },
        },
      },
    },

    {
      $project: {
        recipes: {
          title: "$title",
          thumb: "$thumb",
          ingredients: "$ingredients",
        },
      },
    },
  ])
    .facet({
      metaData: [{ $count: "total" }, { $addFields: { page } }],
      data: [{ $skip: skip }],
    })
    .skip(skip)
    .limit(limit);

  if (result[0].data.length === 0) {
    throw HttpError(404);
  }
  res.json(result);
};
module.exports = getRecipesByIngredient;
