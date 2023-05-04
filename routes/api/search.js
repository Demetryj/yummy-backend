const express = require("express");
const router = express.Router();

const { recipesCtrl, ingredientsCtrl } = require("../../controllers");
const { auth } = require("../../middlewares");

router.get("/title/:title", auth, recipesCtrl.getRecipesByTitle);
router.get("/recipes", auth, recipesCtrl.getAllRecipesTitles);
router.get(
  "/ingredient/:ingredient",
  auth,
  ingredientsCtrl.getRecipesByIngredient
);

module.exports = router;
