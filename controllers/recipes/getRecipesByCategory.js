const { Recipe } = require("../../models/recipe");
const { HttpError } = require("../../helpers");

const getRecipesByCategory = async (req, res) => {
  const { alias } = req.params;
  const { page = 1, limit = 8 } = req.query;
  const curPage = +page;
  const skip = (curPage - 1) * +limit;

  const result = await Recipe.aggregate([
    {
      $match: { category: alias },
    },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingr_info",
      },
    },

    // -----------------------------------------------------------------------------------------------
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // Нажаль, при наявності нижчезакоментованої частини коду, запит  !!САМЕ З ПАРАМЕТРОМ "Beef" видає -- {
    //   "message": "PlanExecutor error during aggregation :: caused by :: $mergeObjects requires object inputs, but input \"Cheese\" is of type string"
    // }

    // {
    //   $set: {
    //     ingredients: {
    //       $map: {
    //         input: "$ingredients",
    //         in: {
    //           $mergeObjects: [
    //             "$$this",
    //             {
    //               $arrayElemAt: [
    //                 "$ingr_info",
    //                 {
    //                   $indexOfArray: ["$ingr_info._id", "$$this.id"],
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       },
    //     },
    //   },
    // },

    {
      $unset: ["ingredients._id", "createdAt", "updatedAt"],
    },
  ])
    .facet({
      metaData: [{ $count: "total" }, { $addFields: { curPage } }],
      recipeData: [{ $skip: +skip }, { $limit: +limit }],
    })
    .unwind("metaData");
  if (result.length === 0 || result[0].recipeData.length === 0) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};
module.exports = getRecipesByCategory;
