const { Ingredient } = require("../../models/ingredient");

const getRecipesByIngredient = async (req, res) => {
  const result1 = await Ingredient.find({});
  const { page = 1, limit = 8 } = req.query;
  const curPage = +page;
  const { ingredient } = req.params;
  const skip = (curPage - 1) * +limit;
  const optionsArr = [
    {
      $match: {
        ttl: ingredient,
      },
    },
    {
      $lookup: {
        from: "recipes",
        localField: "_id",
        foreignField: "ingredients.id",
        pipeline: [
          {
            $project: {
              recipe: {
                _id: "$_id",
                title: "$title",
                thumb: "$thumb",
                ingredients: {
                  $map: {
                    input: "$ingredients",
                    in: {
                      $mergeObjects: [
                        "$$this",
                        {
                          $arrayElemAt: [
                            result1,
                            {
                              $indexOfArray: [result1, "$$this.id"],
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
          {
            $replaceRoot: {
              newRoot: "$recipe",
            },
          },
        ],

        as: "recipe",
      },
    },
    { $unwind: "$recipe" },
    { $unset: ["_id", "recipe.ingredients.t", "recipe.ingredients._id"] },
  ];

  const result = await Ingredient.aggregate(optionsArr)
    .facet({
      metaData: [{ $count: "total" }, { $addFields: { curPage } }],
      recipeData: [{ $skip: +skip }, { $limit: +limit }],
    })
    .unwind("metaData");

  res.json(result);
};
module.exports = getRecipesByIngredient;
