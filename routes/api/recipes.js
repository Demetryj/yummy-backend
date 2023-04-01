const express = require("express");

const router = express.Router()

const ctrl = require('../../controllers/recipe');

const { isValidId } = require('../../middlewares')


router.get('/:recipeId', isValidId, ctrl.getRecipeById);


module.exports = router;