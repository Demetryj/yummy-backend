const { HttpError } = require("../../helpers");
const { Recipe } = require("../../models/recipe");
const { User } = require("../../models/user");

const getUserInfo = async (req, res) => {
  const { userId } = req.params;
  const result = await User.findById(userId, "-password -token -_id");

  if (!result) {
    throw HttpError(404, "Not found");
  }
  const favoritesRecipes = await Recipe.find(
    { favorites: { $eq: userId } },
    "-_id -likes -favorites"
  );
  const timeWithUs = Math.floor(
    (Date.now() - Date.parse(result.createdAt)) / (24 * 60 * 60 * 1000)
  ).toString();
  res.json({ ...result._doc, timeWithUs, favoritesRecipes });
};

module.exports = getUserInfo;
