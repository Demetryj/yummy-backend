const { ctrlWrapper } = require("../../helpers");
const getCategoriesList = require("./getCategoriesList");
const getRecipesByCategory = require("./getRecipesByCategory");
const getRecipeById = require("./getRecipeById");
const getRecipesByQueryParams = require("./getRecipesByQueryParams");
const getRecipesPopular = require("./getRecipesPopular");
const getRecipes = require("./getRecipes");
const updateFavorites = require("./updateFavorites");
const getFavorites = require("./getFavorites");

const recipes = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipesByQueryParams: ctrlWrapper(getRecipesByQueryParams),
  getRecipesPopular: ctrlWrapper(getRecipesPopular),
  updateFavorites: ctrlWrapper(updateFavorites),
  getFavorites: ctrlWrapper(getFavorites),
  getRecipes: ctrlWrapper(getRecipes),
};
module.exports = recipes;
