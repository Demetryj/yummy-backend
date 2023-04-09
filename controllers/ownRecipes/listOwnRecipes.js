const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers");

const listOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Recipe.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "name email");

  if (!result) {
    throw HttpError(404, `No recipe was found`);
  }

  res.json({ result });
};

module.exports = listOwnRecipes;
