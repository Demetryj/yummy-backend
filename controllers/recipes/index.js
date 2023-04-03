const { getCategoriesList } = require('./getCategoriesList');
const { getRecipesByCategory } = require('./getRecipesByCategory');
const { getRecipeById } = require('./getRecipeById');
const { getRecipesByQueryParams } = require('./getRecipesByQueryParams');
const { getRecipesPopular } = require('./getRecipesPopular');
const { updateFavorites } = require('./updateFavorites');
const { getFavorites } = require('./getFavorites');

module.exports = {
  getCategoriesList,
  getRecipesByCategory,
  getRecipeById,
  getRecipesByQueryParams,
  getRecipesPopular,
  updateFavorites,
  getFavorites,
};
