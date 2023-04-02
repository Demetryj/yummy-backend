const express = require("express");
const router = express.Router();

const { ctrlWrapper } = require("../../helpers");
const { recipes: ctrl } = require("../../controllers");

router.get("/:category", ctrl.getRecipesByQueryParams);

module.exports = router;
