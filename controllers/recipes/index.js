const getCategoriesList = require("./getCategoriesList");
const getRecipesByCategory = require("./getRecipesByCategory");
const getRecipeById = require("./getRecipeById");
const getRecipesByQueryParams = require("./getRecipesByQueryParams");
const { ctrlWrapper } = require("../../helpers");

const recipes = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipesByQueryParams: ctrlWrapper(getRecipesByQueryParams),
};
module.exports = recipes;
