const { Recipe } = require("../../models/recipe");
const mongoose = require("mongoose");
const { getOptionsAggArr } = require("../../constants");

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  const result = await Recipe.aggregate(
    getOptionsAggArr({ $match: { _id: mongoose.Types.ObjectId(recipeId) } })
  );

  res.json(result);
};

module.exports = getRecipeById;
