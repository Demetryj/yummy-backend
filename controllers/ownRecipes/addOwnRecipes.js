const { Recipe } = require('../../models');

const addOwnRecipes = async (req, res) => {
  const { _id } = req.user;
  const preview = req.file?.path;

  const { title, category, instructions, description, time, ingredients } = req.body;

  const result = await Recipe.create({
    title,
    preview,
    thumb: preview,
    description,
    category,
    time,
    ingredients,
    instructions,
    owner: _id,
  });

  res.status(201).json({ result });
};

module.exports = addOwnRecipes;
