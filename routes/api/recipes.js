const express = require("express");

const { isValidId } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const { recipes: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/:recipeId", isValidId, ctrl.getRecipeById);

router.get("/category/list", ctrl.getCategoriesList);

router.get("/:category", ctrlWrapper(ctrl.getRecipesByCategory));

module.exports = router;
