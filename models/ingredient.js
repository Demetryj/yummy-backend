const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const ingredientSchema = Schema({
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
    default: '',
  },
  thb: {
    type: String,
    required: true,
  },
});

ingredientSchema.post('save', handleMongooseError);
const Ingredient = model('ingredient', ingredientSchema);

module.exports = {
  Ingredient,
};
