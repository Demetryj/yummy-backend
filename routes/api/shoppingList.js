const express = require("express");

const { auth } = require("../../middlewares");
const { shoppingListCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, shoppingListCtrl.getShoppingList);
router.post("/:ingredientId", auth, shoppingListCtrl.addToShoppingList);
router.delete("/:ingredientId", auth, shoppingListCtrl.removeFromShoppingList);

module.exports = router;
