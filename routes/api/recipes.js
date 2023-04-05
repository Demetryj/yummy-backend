const express = require('express');

const { isValidId, auth } = require('../../middlewares');

const { recipesControllers } = require('../../controllers');

const router = express.Router();

router.get('/main-page', auth, recipesControllers.getRecipes);

router.get('/:recipeId', auth, isValidId, recipesControllers.getRecipeById);

router.get('/category/list', auth, recipesControllers.getCategoriesList);

router.get('/category/:alias', auth, recipesControllers.getRecipesByCategory);

router.get('/all/popular', auth, recipesControllers.getRecipesPopular);

// ендпоінт для додавання рецептів до обраних
router.patch(
  '/:recipeId/favorites/true',
  auth,
  isValidId,
  recipesControllers.addFavorites
);
// ендпоінт для видалення рецептів авторизованого користувача доданих цим же до обраних
router.patch(
  '/:recipeId/favorites/false',
  auth,
  isValidId,
  recipesControllers.removeFavorites
);
// ендпоінт для отримання рецептів авторизованого користувача доданих ним же в обрані
router.get('/favorites/list', auth, recipesControllers.getFavorites);

module.exports = router;
