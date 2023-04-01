const express = require("express");
const router = express.Router();
const { authValidators } = require("../../models/user");
const { validateBodyWrapper, auth } = require("../../middlewares/index");
const controller = require("../../controllers/auth");

router.post("/register", validateBodyWrapper(authValidators.register), controller.register);
router.post("/signin", validateBodyWrapper(authValidators.signin), controller.signin);
router.put("/update", validateBodyWrapper(authValidators.update), controller.update);
router.get("/logout", auth, controller.logout);
router.get("/current", auth, controller.current);

module.exports = router;
