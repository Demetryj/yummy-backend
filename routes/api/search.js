const express = require("express");
const router = express.Router();

const {
  recipesControllers,
  ingredientsControllers,
} = require("../../controllers");
const { auth } = require("../../middlewares");

router.get("/", auth, recipesControllers.getRecipesByQueryParams);
router.get("/:ingredient", auth, ingredientsControllers.getRecipesByIngredient);

module.exports = router;
