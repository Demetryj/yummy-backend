const express = require("express");

const { isValidId, auth } = require("../../middlewares");

const { recipes: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/:recipeId", auth, isValidId, ctrl.getRecipeById);

router.get("/category/list", auth, ctrl.getCategoriesList);

router.get("/category/:alias", auth, ctrl.getRecipesByCategory);

module.exports = router;
