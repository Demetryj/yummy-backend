const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");
const { setPaginationSlice } = require("../../helpers");

const getFavorites = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Recipe.find(
    { favorites: { $in: [owner] } },
    "title category area popularity"
  );

  const { page = 1, per_page = result.length } = req.query;

  if (result.length === 0) {
    return res.json({ totalHits: 0, meals: [] });
  }

  const pagination = setPaginationSlice(page, per_page, result.length);
  if (!pagination) {
    throw HttpError(400, "Incorrect pagination params");
  }

  res.json({
    result: {
      totalHits: result.length,
      meals: result.slice(pagination.start, pagination.end),
    },
  });
};

module.exports = getFavorites;
