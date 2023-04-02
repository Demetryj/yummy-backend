const express = require("express");
const router = express.Router();
const { authValidators } = require("../../models/user");
const {
  validateBodyWrapper,
  auth,
  uploadCloud,
} = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers");
const { ownRecipes: ownCtrl } = require("../../controllers");

const { schemas } = require("../../models/recipe");

router.post(
  "/register",
  validateBodyWrapper(authValidators.register),
  ctrl.register
);

router.post("/signin", validateBodyWrapper(authValidators.signin), ctrl.signin);

// POST method for /update to ease front end life: form data works only with post by default

router.post("/update", auth, uploadCloud.single("avatar"), ctrl.update);

router.get("/logout", auth, ctrl.logout);

router.get("/current", auth, ctrl.current);

// own-recipes

router.get("/:userId/own-recipes", auth, ownCtrl.listOwnRecipes);

router.post(
  "/:userId/own-recipes",
  auth,
  validateBodyWrapper(schemas.addSchema),
  ownCtrl.addOwnRecipes
);

router.delete("/:userId/own-recipes/:recipeId", ownCtrl.removeOwnRecipes);

module.exports = router;
