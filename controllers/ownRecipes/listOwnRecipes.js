const { Recipe } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const listOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Recipe.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "name email");
  res.jsonn({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = {
  listOwnRecipes: ctrlWrapper(listOwnRecipes),
};
