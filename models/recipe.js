const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');
const {
  getCategoriesList,
} = require('../controllers/recipes/getCategoriesList');

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enam: getCategoriesList,
      required: true,
    },
    area: {
      type: String,
      required: false,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: false,
    },
    preview: {
      type: String,
      required: false,
    },
    time: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
      required: false,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false,
      },
    ],
    likes: {
      type: Array,
      required: false,
    },
    youtube: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    ingredients: {
      type: [Object],
      required: true,
      ref: 'ingredient',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  preview: Joi.string(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  time: Joi.string().required(),
  ingredients: Joi.array().required(),
  instructions: Joi.string().required(),
});

const schemas = {
  addSchema,
};

recipeSchema.post('save', handleMongooseError);

const Recipe = model('recipe', recipeSchema);

module.exports = {
  Recipe,
  schemas,
};
