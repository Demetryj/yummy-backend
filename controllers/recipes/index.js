const { ctrlWrapper } = require('../../helpers');
const getCategoriesList = require('./getCategoriesList');
const getRecipesByCategory = require('./getRecipesByCategory');
const getRecipeById = require('./getRecipeById');
const getRecipesByQueryParams = require('./getRecipesByQueryParams');
const getRecipesPopular = require('./getRecipesPopular');
const getRecipes = require('./getRecipes');
const addFavorites = require('./addFavorites');
const removeFavorites = require('./removeFavorites');
const getFavorites = require('./getFavorites');

const recipes = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipesByQueryParams: ctrlWrapper(getRecipesByQueryParams),
  getRecipesPopular: ctrlWrapper(getRecipesPopular),
  addFavorites: ctrlWrapper(addFavorites),
  removeFavorites: ctrlWrapper(removeFavorites),
  getFavorites: ctrlWrapper(getFavorites),
  getRecipes: ctrlWrapper(getRecipes),
};
module.exports = recipes;
