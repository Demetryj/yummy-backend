const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers");

const removeOwnRecipes = async (req, res) => {
  const { recipeId } = req.params;
  const result = await Recipe.findByIdAndRemove(recipeId);

  if (!result) {
    throw HttpError(404, `Recipe with id=${recipeId} not found`);
  }

  res.json({ message: "Recipe successfully deleted" });
};

module.exports = removeOwnRecipes;
