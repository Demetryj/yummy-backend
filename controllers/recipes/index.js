const { getCategoriesList } = require('./getCategoriesList');
const getRecipesByCategory = require('./getRecipesByCategory');
const { getRecipeById } = require('./getRecipeById');
const { getRecipesPopular } = require('./getRecipesPopular');

module.exports = {
  getCategoriesList,
  getRecipesByCategory,
  getRecipeById,
  getRecipesPopular,
};
