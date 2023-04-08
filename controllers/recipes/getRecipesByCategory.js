const { aggregateOpts } = require("../../constants");
const { Recipe } = require("../../models/recipe");

const getRecipesByCategory = async (req, res) => {
  const { alias } = req.params;
  const { page = 1, limit = 8 } = req.query;
  const curPage = +page;
  const skip = (curPage - 1) * +limit;

  const result = await Recipe.aggregate(
    aggregateOpts.getOptionsAggArr1({
      $match: { category: alias },
    })
  ).facet({
    metaData: [{ $count: "total" }, { $addFields: { curPage } }],
    recipeData: [{ $skip: +skip }, { $limit: +limit }],
  });

  res.json(result);
};
module.exports = getRecipesByCategory;
