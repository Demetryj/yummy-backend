const { Ingredient } = require("../../models/ingredient");

const getIngredientsList = async (_, res) => {
  const result = await Ingredient.find({});
  res.json(result);
};

module.exports = getIngredientsList;
