const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers");

const removeOwnRecipes = async (req, res) => {
  const { id } = req.params;
  const result = await Recipe.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, `Recipe with id=${id} not found`);
  }

  res.json({ result });
};

module.exports = removeOwnRecipes;
