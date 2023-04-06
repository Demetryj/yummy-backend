const { Recipe } = require("../../models/recipe");
const mongoose = require("mongoose");
const { HttpError, ctrlWrapper } = require("../../helpers");
const ObjectId = mongoose.Types.ObjectId;
const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  const result = await Recipe.aggregate([
    {
      $match: {
        _id: ObjectId(recipeId),
      },
    },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingr_nfo",
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: "$ingredients",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$ingr_nfo",
                    {
                      $indexOfArray: ["$ingr_nfo._id", "$$this.id"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ["ingr_nfo", "ingredients.id"],
    },
  ]);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = {
  getRecipeById: ctrlWrapper(getRecipeById),
};
