const express = require("express");
const router = express.Router();
const { authValidators } = require("../../models/user");
const {
  validateBodyWrapper,
  auth,
  uploadCloud,
} = require("../../middlewares/index");
const { authControllers } = require("../../controllers");

router.post(
  "/register",
  validateBodyWrapper(authValidators.register),
  authControllers.register
);

router.post(
  "/signin",
  validateBodyWrapper(authValidators.signin),
  authControllers.signin
);

// POST method for /update to ease front end life: form data works only with post by default
router.post(
  "/update",
  auth,
  uploadCloud.single("avatar"),
  authControllers.update
);

router.get("/logout", auth, authControllers.logout);

router.get("/current", auth, authControllers.current);

router.get("/info/:userId", auth, authControllers.getUserInfo);

module.exports = router;
