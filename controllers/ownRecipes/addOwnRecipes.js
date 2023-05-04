const { Recipe } = require("../../models");

const addOwnRecipes = async (req, res) => {
  const { userId } = req.params;
  const preview = req.file?.path;
  const { title, category, instructions, description, time, ingredients } =
    req.body;
  const ingredientsParsed = ingredients.map((el) => JSON.parse(el));
  const result = await Recipe.create({
    title,
    preview,
    thumb: preview,
    description,
    category,
    time,
    ingredients: ingredientsParsed,
    instructions,
    owner: userId,
  });

  res.status(201).json({ result });
};

module.exports = addOwnRecipes;
