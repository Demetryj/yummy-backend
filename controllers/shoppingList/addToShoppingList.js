const { ctrlWrapper, HttpError } = require('../../helpers');
const { User, Ingredient } = require('../../models');

const addToShoppingList = async (req, res) => {
  const { _id } = req.user;
  const { productsId } = req.params;

  const [ingredient] = await Ingredient.find({ _id: productsId });
  if (!ingredient) throw HttpError(400, 'Bad request');
  const user = await User.findByIdAndUpdate(_id, { new: true });
  if (!user.shoppingList) throw HttpError(404, 'Not Found');

  user.shoppingList.push(ingredient);
  await user.save();

  res.status(201).json({ result: ingredient });
};

module.exports = { addToShoppingList: ctrlWrapper(addToShoppingList) };
