const express = require("express");

const { isValidId, auth } = require("../../middlewares");

const { recipesControllers } = require("../../controllers");

const router = express.Router();

router.get("/:recipeId", auth, isValidId, recipesControllers.getRecipeById);

router.get("/category/list", auth, recipesControllers.getCategoriesList);

router.get("/category/:alias", auth, recipesControllers.getRecipesByCategory);


module.exports = router;
