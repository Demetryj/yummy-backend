const express = require("express");

const { isValidId, auth } = require("../../middlewares");

const { recipesCtrl } = require("../../controllers");

const router = express.Router();

router.get("/main-page", auth, recipesCtrl.getRecipes);

router.get("/popular-recipes", auth, recipesCtrl.getRecipesPopular);

router.get("/:recipeId", auth, isValidId, recipesCtrl.getRecipeById);

router.get("/category/list", auth, recipesCtrl.getCategoriesList);

router.get("/category/:alias", auth, recipesCtrl.getRecipesByCategory);

// ендпоінт для додавання рецептів до обраних
router.patch(
  "/:recipeId/favorites/true",
  auth,
  isValidId,
  recipesCtrl.addFavorites
);
// ендпоінт для видалення рецептів авторизованого користувача доданих цим же до обраних
router.patch(
  "/:recipeId/favorites/false",
  auth,
  isValidId,
  recipesCtrl.removeFavorites
);

// ендпоінт для отримання рецептів авторизованого користувача доданих ним же в обрані
router.get("/favorites/list", auth, recipesCtrl.getFavorites);

module.exports = router;
