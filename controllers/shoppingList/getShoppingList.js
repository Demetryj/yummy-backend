const { ctrlWrapper } = require('../../helpers');
const { ShoppingList } = require('../../models');

const getShoppingList = async (req, res) => {
  const { _id } = req.user;
  const data = await ShoppingList.find({ owner: _id });

  // const contacts = await Contact.find({ owner: _id }, '', { skip, limit: Number(limit) }).populate(
  //   'owner',
  //   '_id name email'
  // );

  res.json(data);
};

module.exports = { getShoppingList: ctrlWrapper(getShoppingList) };
