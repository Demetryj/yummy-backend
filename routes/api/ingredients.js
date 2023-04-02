const express = require("express");

const { auth } = require("../../middlewares");
const { ingredients: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/list", auth, ctrl.getIngredientsList);

module.exports = router;
