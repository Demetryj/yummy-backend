const express = require('express');
const ctrl = require('../../controllers/recipes');

const categoryRouter = express.Router();

categoryRouter.get('/category-list', ctrl.categories);

module.exports = categoryRouter;
