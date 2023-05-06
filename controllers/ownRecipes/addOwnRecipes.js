const mongoose = require("mongoose");
const { Recipe } = require("../../models");

const addOwnRecipes = async (req, res) => {
  const { userId } = req.params;
  const preview = req.file?.path;
  const { title, category, instructions, description, time, ingredients } =
    req.body;
  const ingredientsParsed = JSON.parse(ingredients);
  const result = await Recipe.create({
    title,
    preview,
    thumb: preview,
    description,
    category,
    time,
    ingredients: ingredientsParsed.map((el) => ({
      ttl: el.ttl,
      thb: el.thb,
      measure: el.measure,
      id: mongoose.Types.ObjectId(el.id),
    })),
    instructions,
    owner: mongoose.Types.ObjectId(userId),
  });

  res.status(201).json({ result });
};

module.exports = addOwnRecipes;
