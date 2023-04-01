const { ctrlWrapper } = require('../../helpers');

const categories = require('./categories');

module.exports = {
  categories: ctrlWrapper(categories),
};
