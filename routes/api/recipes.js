const express = require("express");

const { recipes: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/:category", ctrlWrapper(ctrl.getRecipesByCategory));
module.exports = router;




const ctrl = require('../../controllers/recipe');

const { isValidId } = require('../../middlewares')


router.get('/:recipeId', isValidId, ctrl.getRecipeById);


module.exports = router;

