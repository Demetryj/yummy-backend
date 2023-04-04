const { Recipe } = require('../../models/recipe');

const { HttpError} = require('../../helpers');

const getRecipesPopular = async (req, res) => {
  const data = await Recipe.find();
  if (!data) {
    throw HttpError(404, 'Not found');
  }

  const result = data.filter((item) => item.favorites.length >= 15);
  res.json(result);
};

module.exports = getRecipesPopular;
