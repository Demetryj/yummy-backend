const express = require('express');

const { isValidId, auth } = require('../../middlewares');

const { recipes: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/main-page', auth, ctrl.getRecipes);

router.get('/popular-recipes', auth, ctrl.getRecipesPopular);

router.get('/:recipeId', auth, isValidId, ctrl.getRecipeById);

router.get('/category/list', auth, ctrl.getCategoriesList);

router.get('/category/:alias', auth, ctrl.getRecipesByCategory);

router.patch('/:recipeId/favorites', auth, isValidId, ctrl.updateFavorites);

router.get('/favorites/list', auth, ctrl.getFavorites);

module.exports = router;
