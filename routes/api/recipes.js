const express = require('express');

const { isValidId, auth } = require('../../middlewares');

const { recipes: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/main-page', auth, ctrl.getRecipes);

router.get('/:recipeId', auth, isValidId, ctrl.getRecipeById);

router.get('/category/list', auth, ctrl.getCategoriesList);

router.get('/category/:alias', auth, ctrl.getRecipesByCategory);

router.get('/all/popular', auth, ctrl.getRecipesPopular);
// ендпоінт для додавання рецептів до обраних
router.patch('/:recipeId/favorites/true', auth, isValidId, ctrl.addFavorites);
// ендпоінт для видалення рецептів авторизованого користувача доданих цим же до обраних
router.patch(
  '/:recipeId/favorites/false',
  auth,
  isValidId,
  ctrl.removeFavorites
);
// ендпоінт для отримання рецептів авторизованого користувача доданих ним же в обрані
router.get('/favorites/list', auth, ctrl.getFavorites);

module.exports = router;
