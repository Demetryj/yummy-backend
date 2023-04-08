const { ctrlWrapper } = require("../../helpers");
const getIngredientsList = require("./getIngredientsList");
const getRecipesByIngredient = require("./getRecipesByIngredient");

const ingredients = {
  getIngredientsList: ctrlWrapper(getIngredientsList),
  getRecipesByIngredient: ctrlWrapper(getRecipesByIngredient),
};

module.exports = ingredients;
