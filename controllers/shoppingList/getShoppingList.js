const { ShoppingList } = require("../../models");

const getShoppingList = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await ShoppingList.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  });

  res.json(result);
};

module.exports = getShoppingList;
