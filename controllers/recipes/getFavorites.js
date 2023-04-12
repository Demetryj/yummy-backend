const { Recipe } = require('../../models/recipe');

const getFavorites = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Recipe.find(
    { favorites: { $in: [owner] } },
    'title category area description popularity preview time'
  );
  res.json(result);
};

module.exports = getFavorites;
