const express = require("express");
const router = express.Router();

const { recipesCtrl, ingredientsCtrl } = require("../../controllers");
const { auth } = require("../../middlewares");

router.get("/", auth, recipesCtrl.getRecipesByQueryParams);
router.get("/:ingredient", auth, ingredientsCtrl.getRecipesByIngredient);

module.exports = router;
