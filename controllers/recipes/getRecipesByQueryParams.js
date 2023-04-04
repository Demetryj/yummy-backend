const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipesByQueryParams = async (req, res) => {
  const { keyword = "", page = 1, limit = 8 } = req.query;

  const skip = (page - 1) * limit;

  const result = await Recipe.find(
    { title: { $regex: "^" + keyword, $options: "i" } },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).exec();
  if (result.length === 0) {
    throw HttpError(404, "No recipe names containing such symbols were found");
  }
  res.json(result);
};
module.exports = getRecipesByQueryParams;
