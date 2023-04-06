const { Recipe } = require("../../models/recipe");
const mongoose = require("mongoose");
const { aggregateOpts } = require("../../constants");

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  const result = await Recipe.aggregate(
    aggregateOpts.getOptionsAggArr1({ $match: { _id: mongoose.Types.ObjectId(recipeId) } })
  );

  res.json(result);
};

module.exports = getRecipeById;
