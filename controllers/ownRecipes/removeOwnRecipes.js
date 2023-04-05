const { Recipe } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const removeOwnRecipes = async (req, res) => {
  const { recipeId } = req.params;
  const result = await Recipe.findByIdAndRemove(recipeId);

  if (!result) {
    throw HttpError(404, `Recipe with id=${recipeId} not found`);
  }

  res.json({ result });
};

module.exports = {
  removeOwnRecipes: ctrlWrapper(removeOwnRecipes),
};
