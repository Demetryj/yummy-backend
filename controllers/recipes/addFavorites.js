const { Recipe, User } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const addFavorites = async (req, res) => {
  const { _id: owner } = req.user;
  const { recipeId: id } = req.params;

  const result = await Recipe.findByIdAndUpdate(
    id,
    { $addToSet: { favorites: owner } },
    { new: true }
  );

  const user = await User.findByIdAndUpdate(
    owner,
    { $addToSet: { favorites: id } },
    { new: true }
  );

  if (!result || !user) {
    throw HttpError(404, 'Not Found');
  }

  res.json({
    user,
    result,
  });
};

module.exports = {
  addFavorites: ctrlWrapper(addFavorites),
};
