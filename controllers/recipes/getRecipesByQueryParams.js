const { Recipe } = require("../../models/recipe");
const { aggregateOpts } = require("../../constants");

const getRecipesByQueryParams = async (req, res) => {
  const { keyword = "", page = 1, limit = 8 } = req.query;
  const curPage = +page;
  const skip = (curPage - 1) * +limit;

  const result = await Recipe.aggregate(
    aggregateOpts.getOptionsAggArr1({
      $match: { title: { $regex: "^" + keyword, $options: "i" } },
    })
  ).facet({
    metaData: [{ $count: "total" }, { $addFields: { curPage } }],
    recipeData: [{ $skip: +skip }, { $limit: +limit }],
  });

  res.json(result);
};
module.exports = getRecipesByQueryParams;
