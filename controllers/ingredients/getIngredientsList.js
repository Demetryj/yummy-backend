const { Ingredient } = require("../../models/ingredient");

const { ctrlWrapper } = require("../../helpers");

const getIngredientsList = async (req, res) => {
  const result = await Ingredient.find({});
  res.json(result);
};

module.exports = { getIngredientsList: ctrlWrapper(getIngredientsList) };
