
const categories = require('./categories');
const getRecipesByCategory = require("./getRecipesByCategory");


const { ctrlWrapper } = require('../../helpers');



module.exports = {
  getRecipesByCategory
  categories: ctrlWrapper(categories),
};

