const { Recipe } = require('../../models/recipe');

const { HttpError, ctrlWrapper } = require('../../helpers');

const updateFavorites = async (req, res) => {
  const { _id: owner } = req.user;
  const { recipeId: id } = req.params;
  const { favorites } = req.query;

  const result =
    favorites === 'true'
      ? await Recipe.findByIdAndUpdate(
          id,
          { $addToSet: { favorites: owner } },
          { new: true }
        )
      : await Recipe.findByIdAndUpdate(
          id,
          { $pull: { favorites: owner } },
          { new: true }
        );

  if (!result) {
    throw HttpError(404, 'Not Found');
  }

  res.json({ result });
};

module.exports = {
  updateFavorites: ctrlWrapper(updateFavorites),
};
