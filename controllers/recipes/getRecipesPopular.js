const { Recipe } = require('../../models/recipe');

const { HttpError, ctrlWrapper } = require('../../helpers');

const getRecipesPopular = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Recipe.find({ 'favorites.15': { $exists: true } }, '-createdAt -updatedAt', { skip, limit });
  if (!data) {
    throw HttpError(404, 'Not found');
  }
  res.json(data);
};

module.exports = {
  getRecipesPopular: ctrlWrapper(getRecipesPopular),
};
