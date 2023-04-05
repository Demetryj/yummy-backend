const express = require("express");
const router = express.Router();
const { authValidators } = require("../../models/user");
const {
  validateBodyWrapper,
  auth,
  uploadCloud,
} = require("../../middlewares/index");

const { authControllers, ownRecipesControllers } = require("../../controllers");

const { auth: ctrl } = require("../../controllers");
const { ownRecipes: ownCtrl } = require("../../controllers");


const { schemas } = require("../../models/recipe");

router.post(
  "/register",
  validateBodyWrapper(authValidators.register),
  authControllers.register
);


router.post("/signin", validateBodyWrapper(authValidators.signin), ctrl.signin);


// POST method for /update to ease front end life: form data works only with post by default

router.post(
  "/update",
  auth,
  uploadCloud.single("avatar"),
  authControllers.update
);


router.get("/logout", auth, ctrl.logout);

router.get("/current", auth, ctrl.current);

router.get("/current/subscribe/:subscribedToken", ctrl.updateSubscription);

router.post(
  "/current/subscribe",
  auth,
  validateBodyWrapper(authValidators.subscribe),
  authControllers.sendSubscriptionEmail
);

// own-recipes

router.get("/:userId/own-recipes", auth, ownRecipesControllers.listOwnRecipes);

router.post(
  "/:userId/own-recipes",
  auth,
  validateBodyWrapper(schemas.addSchema),
  ownRecipesControllers.addOwnRecipes
);


router.delete("/:userId/own-recipes/:recipeId", auth, ownCtrl.removeOwnRecipes);

router.get("/info/:userId", auth, ctrl.getUserInfo);


module.exports = router;
