const { aggregateOpts } = require("../../constants");
const { Ingredient } = require("../../models/ingredient");

const getRecipesByIngredient = async (req, res) => {
  const result1 = await Ingredient.find({});
  const { page = 1, limit = 8 } = req.query;
  const curPage = +page;
  const { ingredient } = req.params;
  const skip = (curPage - 1) * +limit;

  const result = await Ingredient.aggregate(
    aggregateOpts.getOptionsAggArr2(
      {
        $match: {
          ttl: { $regex: "^" + ingredient, $options: "i" },
        },
      },
      result1
    )
  )
    .facet({
      metaData: [{ $count: "total" }, { $addFields: { curPage } }],
      recipeData: [{ $skip: +skip }, { $limit: +limit }],
    })
    .unwind("metaData");

  res.json(result);
};
module.exports = getRecipesByIngredient;
