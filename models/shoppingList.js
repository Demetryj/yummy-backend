const { Schema, model } = require('mongoose');

const shoppingListSchema = Schema(
  {
    ttl: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    t: {
      type: String,
      default: null,
    },
    thb: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const ShoppingList = model('shopping-list', shoppingListSchema);

module.exports = {
  ShoppingList,
};
