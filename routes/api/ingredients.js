const express = require("express");

const { auth } = require("../../middlewares");
const { ingredientsCtrl } = require("../../controllers");

const router = express.Router();

router.get("/list", auth, ingredientsCtrl.getIngredientsList);

module.exports = router;
