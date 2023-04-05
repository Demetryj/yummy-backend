const express = require("express");

const { isValidId, auth } = require("../../middlewares");

const { recipesControllers } = require("../../controllers");

const router = express.Router();

router.get("/main-page", auth, recipesControllers.getRecipes);

router.get("/:recipeId", auth, isValidId, recipesControllers.getRecipeById);

router.get("/category/list", auth, recipesControllers.getCategoriesList);

router.get("/category/:alias", auth, recipesControllers.getRecipesByCategory);

router.get("/all/popular", auth, recipesControllers.getRecipesPopular);

router.patch(
  "/:recipeId/favorites",
  auth,
  isValidId,
  recipesControllers.updateFavorites
);

router.get("/favorites/list", auth, recipesControllers.getFavorites);

module.exports = router;
