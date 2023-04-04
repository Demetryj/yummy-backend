const express = require("express");

const { auth, validateBodyWrapper } = require("../../middlewares");
const { shoppingListControllers } = require("../../controllers");
const { shoppingListJoiSchema } = require("../../models/shoppingList");

const router = express.Router();

router.get("/", auth, shoppingListControllers.getShoppingList);
router.post(
  "/",
  auth,
  validateBodyWrapper(shoppingListJoiSchema),
  shoppingListControllers.addToShoppingList
);
router.delete("/:id", shoppingListControllers.removeFromShoppingList);

module.exports = router;
