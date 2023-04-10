const getOptionsAggArr1 = (optObj) => [
  optObj,
  {
    $lookup: {
      from: "ingredients",
      localField: "ingredients.id",
      foreignField: "_id",
      as: "ingr_info",
    },
  },
  {
    $set: {
      ingredients: {
        $map: {
          input: "$ingredients",
          in: {
            $mergeObjects: [
              "$$this",
              {
                $arrayElemAt: [
                  "$ingr_info",
                  {
                    $indexOfArray: ["$ingr_info._id", "$$this.id"],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },

  {
    $unset: ["ingr_info", "ingredients._id", "createdAt", "updatedAt"],
  },
];
const getOptionsAggArr2 = (optObj, result1) => [
  optObj,
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
  { $unset: ["_id", "t", "recipe.ingredients.t", "recipe.ingredients._id"] },
];
const aggregateOpts = { getOptionsAggArr1, getOptionsAggArr2 };
module.exports = aggregateOpts;
