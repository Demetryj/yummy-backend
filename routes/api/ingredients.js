const express = require("express");

const { auth } = require("../../middlewares");
const { ingredientsControllers } = require("../../controllers");

const router = express.Router();

router.get("/list", auth, ingredientsControllers.getIngredientsList);


module.exports = router;
