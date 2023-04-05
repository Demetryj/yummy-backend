const { ctrlWrapper, HttpError } = require('../../helpers');
const { User, Ingredient } = require('../../models');

const removeFromShoppingList = async (req, res) => {
  const { _id } = req.user;
  const { productsId } = req.params;

  const [ingredient] = await Ingredient.find({ _id: productsId });

  const user = await User.findById(_id);

  if (!user.shoppingList) throw HttpError(400, 'Bad request');

  const isIdInshoppingList = user.shoppingList.findIndex(n => n._id.toString() === ingredient._id.toString()) !== -1;

  if (!isIdInshoppingList) throw HttpError(400, 'Bad request');

  const filteredList = user.shoppingList.filter(n => n._id.toString() !== ingredient._id.toString());
  user.shoppingList = filteredList;
  await user.save();

  res.json({ message: `ingredient ID: ${productsId} has been deleted` });
};

module.exports = { removeFromShoppingList: ctrlWrapper(removeFromShoppingList) };
