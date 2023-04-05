const recipesControllers = require("./recipes");
const authControllers = require("./auth");
const ownRecipesControllers = require("./ownRecipes");
const ingredientsControllers = require("./ingredients");
const shoppingListControllers = require("./shoppingList");

module.exports = {
  recipesControllers,
  authControllers,
  ownRecipesControllers,
  ingredientsControllers,
  shoppingListControllers,
};
