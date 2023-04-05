const {  HttpError } = require('../../helpers');
const { ShoppingList } = require('../../models');

const removeFromShoppingList = async (req, res) => {
  const { id } = req.params;
  const result = await ShoppingList.findByIdAndRemove(id);
  if (!result) throw HttpError(404, 'Not found');

  res.json(result);
};

module.exports = removeFromShoppingList;
