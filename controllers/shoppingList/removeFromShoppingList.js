const { ctrlWrapper, HttpError } = require('../../helpers');
const { ShoppingList } = require('../../models');

const removeFromShoppingList = async (req, res) => {
  const { id } = req.params;
  const data = await ShoppingList.findByIdAndRemove(id);
  if (!data) throw HttpError(404, 'Not found');

  res.json({
    success: true,
    code: 200,
    message: 'ingredient removed from shopping list',
    id,
  });
};

module.exports = { removeFromShoppingList: ctrlWrapper(removeFromShoppingList) };
