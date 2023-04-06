const getOptionsAggArr = (optObj) => [
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
                    $indexOfArray: ["$ingr_info", "$$this.id"],
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
module.exports = getOptionsAggArr;
