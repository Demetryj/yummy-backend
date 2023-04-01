const express = require("express");
const { recipes: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();
router.get("/:category", ctrlWrapper(ctrl.getRecipesByCategory));
module.exports = router;
