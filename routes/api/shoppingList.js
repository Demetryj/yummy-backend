const express = require('express');

const { auth } = require('../../middlewares');
const { shoppingList: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', auth, ctrl.getShoppingList);
router.post('/', auth, ctrl.addToShoppingList);
router.delete('/', auth, ctrl.removeFromShoppingList);

module.exports = router;
