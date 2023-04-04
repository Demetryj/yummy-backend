const { Recipe } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const addOwnRecipes = async (req, res) => {
  const { _id } = req.user;

  const { title, description, category, time, ingredients, instructions } =
    req.body;

  if (title) {
    throw HttpError(409, "This title already exist");
  }
  const result = await Recipe.create({
    title,
    description,
    category,
    time,
    ingredients,
    instructions,
    owner: _id,
  });

  res.status(201).json({ result });
};

module.exports = {
  addOwnRecipes: ctrlWrapper(addOwnRecipes),
};
