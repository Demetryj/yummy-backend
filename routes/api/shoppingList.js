const express = require('express');

const { auth, validateBodyWrapper } = require('../../middlewares');
const { shoppingList: ctrl } = require('../../controllers');
const { shoppingListJoiSchema } = require('../../models/shoppingList');

const router = express.Router();

router.get('/', auth, ctrl.getShoppingList);
router.post('/', auth, validateBodyWrapper(shoppingListJoiSchema), ctrl.addToShoppingList);
router.delete('/:id', ctrl.removeFromShoppingList);

module.exports = router;
