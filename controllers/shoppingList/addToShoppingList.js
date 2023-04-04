const { ShoppingList } = require("../../models");
const addToShoppingList = async (req, res) => {
  const { _id } = req.user;

  const result = await ShoppingList.create({ ...req.body, owner: _id });

  res.status(201).json({ result });
};

module.exports = addToShoppingList;
