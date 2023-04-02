const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const categoryVariants = require('../data/categories.json');


const recipeSchema = new Schema(
  {
    title:
    {
      type: String,
      required: true
    },
    category:
    {
      type: String,
      enum: categoryVariants,
      required: true
    },
    area:
    {
      type: String,
      required: true
    },
    instructions:
    {
      type: String,
      required: true
    },
    description:
    {
      type: String,
      required: true
    },
    thumb:
    {
      type: String,
      required: true
    },
    preview:
    {
      type: String,
      required: true
    },
    time:
    {
      type: String,
      required: true
    },
    popularity:
    {
      type: Number,
      required: true
    },
    favorites:
    {
      type: [Schema.Types.ObjectId]
    },
    likes:
    {
      type: Array
    },
    youtube:
    {
      type: String
    },
    tags:
    {
      type: [String]
    },
    ingredients:
    {
      type: [Schema.Types.ObjectId],
      required: true
    },
  },
  { versionKey: false, timestamps: true }
);

recipeSchema.post("save", handleMongooseError);

const Recipe = model("recipe", recipeSchema);

module.exports = {
  Recipe,
};