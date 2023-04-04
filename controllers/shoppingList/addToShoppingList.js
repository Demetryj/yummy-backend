const { ctrlWrapper } = require('../../helpers');
const { ShoppingList } = require('../../models');
const addToShoppingList = async (req, res) => {
  const { _id } = req.user;

  const data = await ShoppingList.create({ ...req.body, owner: _id });

  res.status(201).json({
    success: true,
    code: 201,
    message: 'ingredient added to shopping list',
    data,
  });
};

module.exports = { addToShoppingList: ctrlWrapper(addToShoppingList) };
