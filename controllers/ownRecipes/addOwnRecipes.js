const { Recipe } = require("../../models");

const { HttpError} = require("../../helpers");

const { ctrlWrapper } = require("../../helpers");


const addOwnRecipes = async (req, res) => {
  const { _id } = req.user;


  const {
    title,
    preview,
    description,
    category,
    time,
    ingredients,
    instructions,
  } = req.body;


  const result = await Recipe.create({
    title,
    preview,
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
