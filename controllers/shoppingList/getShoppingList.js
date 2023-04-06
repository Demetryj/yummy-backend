const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const getShoppingList = async (req, res) => {
  const { _id } = req.user;
  const { shoppingList } = await User.findById(_id);

  if (!shoppingList) throw HttpError(404, 'Not Found');

  res.json(shoppingList);
};

module.exports = getShoppingList;
