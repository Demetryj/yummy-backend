const express = require("express");
const router = express.Router();
const { authValidators } = require("../../models/user");
const {
  validateBodyWrapper,
  auth,
  uploadCloud,
} = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers");

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

router.get("/info/:userId", auth, ctrl.getUserInfo);

module.exports = router;
