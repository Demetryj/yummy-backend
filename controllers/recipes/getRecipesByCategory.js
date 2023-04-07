const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipesByCategory = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const { alias } = req.params;

  const skip = (page - 1) * limit;

  const result = await Recipe.find(
    { category: alias },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).where("rangeBefore");
  if (result.length === 0) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
module.exports = getRecipesByCategory;
