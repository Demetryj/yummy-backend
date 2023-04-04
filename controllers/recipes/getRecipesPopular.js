const { Recipe } = require('../../models/recipe');

const { HttpError, ctrlWrapper } = require('../../helpers');

const getRecipesPopular = async (req, res) => {
  const data = await Recipe.find({});
  if (!data) {
    throw HttpError(404, 'Not found');
  }

  const result = data.filter((item) => item.favorites.length >= 15);

  const slicedResult = result.slice(4);

  res.json(slicedResult);
};

module.exports = {
  getRecipesPopular: ctrlWrapper(getRecipesPopular),
};
