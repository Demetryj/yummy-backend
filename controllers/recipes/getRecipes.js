const { Recipe } = require("../../models/recipe");

const categoriesPopular = ["Breakfast", "Miscellaneous", "Vegan", "Dessert"];
const qtty = 4;

const getRecipes = async (req, res) => {
  const recipes = await Recipe.find(
    { category: { $in: categoriesPopular } },
    "-createdAt -updatedAt -area -instructions -description -time -favorites -likes -youtube -tags"
  ).sort([
    ["popularity", -1],
    ["title", 1],
  ]);

  const groupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const grouped = groupBy(recipes, "category");

  Object.keys(grouped).forEach((key) => {
    grouped[key] = grouped[key].slice(0, qtty);
  });

  res.status(200).json(grouped);
};

module.exports = { getRecipes };
