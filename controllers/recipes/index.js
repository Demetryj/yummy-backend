const { getCategoriesList } = require('./getCategoriesList');
const { getRecipesByCategory } = require('./getRecipesByCategory');
const { getRecipeById } = require('./getRecipeById');
const { getRecipesByQueryParams } = require('./getRecipesByQueryParams');
const { getRecipesPopular } = require('./getRecipesPopular');

module.exports = {
  getCategoriesList,
  getRecipesByCategory,
  getRecipeById,
  getRecipesByQueryParams,
  getRecipesPopular,
};
