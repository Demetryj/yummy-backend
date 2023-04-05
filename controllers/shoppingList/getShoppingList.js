
const { ctrlWrapper, HttpError } = require('../../helpers');
const { User } = require('../../models');


const getShoppingList = async (req, res) => {
  const { _id } = req.user;


  const result = await ShoppingList.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  });


  if (!shoppingList) throw HttpError(404, 'Not Found');

  res.json(shoppingList);
};

module.exports = getShoppingList;
