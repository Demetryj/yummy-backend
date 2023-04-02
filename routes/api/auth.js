const express = require("express");
const router = express.Router();
const { authValidators } = require("../../models/user");
const { validateBodyWrapper, auth, uploadCloud } = require("../../middlewares/index");
const controller = require("../../controllers/auth");

router.post("/register", validateBodyWrapper(authValidators.register), controller.register);


router.post("/signin", validateBodyWrapper(authValidators.signin), controller.signin);

// POST method for /update to ease front end life: form data works only with post by default
router.post("/update", auth, uploadCloud.single("avatar"), controller.update);

router.get("/logout", auth, controller.logout);

router.get("/current", auth, controller.current);

module.exports = router;


