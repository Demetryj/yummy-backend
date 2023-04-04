const express = require("express");
const router = express.Router();

const { recipesControllers, ingredientsControllers } = require("../../controllers");

router.get("/", recipesControllers.getRecipesByQueryParams);
router.get("/:ingredient", ingredientsControllers.getRecipesByIngredient);

module.exports = router;
