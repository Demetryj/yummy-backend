const { Recipe } = require('../../models/recipe');

const { HttpError, ctrlWrapper } = require('../../helpers');

const getRecipesPopular = async (req, res) => {
  //   const { recipeId } = req.params;
  console.log('/popular');
  const data = await Recipe.find();
  if (!data) {
    throw HttpError(404, 'Not found');
  }
  const result = data.filter((item) => item.popularity >= 3);
  res.json(result);
};

module.exports = {
  getRecipesPopular: ctrlWrapper(getRecipesPopular),
};
