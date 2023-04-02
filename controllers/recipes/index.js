const { getCategoriesList } = require("./getCategoriesList");
const { getRecipesByCategory } = require("./getRecipesByCategory");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByQueryParams } = require("./getRecipesByQueryParams");
module.exports = {
  getCategoriesList,
  getRecipesByCategory,
  getRecipeById,
  getRecipesByQueryParams,
};
