const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const shoppingListSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'ingredient',
    },
    picture: {
      type: String,
      required: true,
    },
    measure: {
      type: String,
      default: '',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const shoppingListJoiSchema = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required(),
  tag: Joi.string().default('ingredient'),
  picture: Joi.string().required(),
  measure: Joi.string().default(''),
});

shoppingListSchema.post('save', handleMongooseError);

const ShoppingList = model('shopping-list', shoppingListSchema);

module.exports = {
  ShoppingList,
  shoppingListJoiSchema,
};
