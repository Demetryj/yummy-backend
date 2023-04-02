const { ctrlWrapper } = require("../../helpers");
const { getCategoriesList } = require("./getCategoriesList");
const { getRecipesByCategory } = require("./getRecipesByCategory");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByQueryParams } = require("./getRecipesByQueryParams");
const { getRecipesPopular } = require("./getRecipesPopular");
const { getRecipes } = require("./getRecipes");

module.exports = {
  getCategoriesList,
  getRecipesByCategory,
  getRecipeById,
  getRecipesByQueryParams,
  getRecipesPopular,
  getRecipes: ctrlWrapper(getRecipes),
};
