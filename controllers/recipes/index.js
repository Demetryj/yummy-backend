const { ctrlWrapper } = require('../../helpers');
const { getCategoriesList } = require('./getCategoriesList');
const { getRecipesByCategory } = require('./getRecipesByCategory');
const { getRecipeById } = require('./getRecipeById');
const { getRecipesByQueryParams } = require('./getRecipesByQueryParams');
const { getRecipesPopular } = require('./getRecipesPopular');
const { getRecipes } = require('./getRecipes');
const { addFavorites } = require('./addFavorites');
const { removeFavorites } = require('./removeFavorites');
const { getFavorites } = require('./getFavorites');

module.exports = {
  getCategoriesList,
  getRecipesByCategory,
  getRecipeById,
  getRecipesByQueryParams,
  getRecipesPopular,
  addFavorites,
  removeFavorites,
  getFavorites,
  getRecipes: ctrlWrapper(getRecipes),
};
