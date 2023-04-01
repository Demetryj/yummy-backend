const { Recipe } = require('../models/recipe');

const { HttpError, ctrlWrapper } = require('../helpers');

const getRecipeById = async (req, res) => {
    const { recipeId } = req.params;
    const result = await Recipe.findById(recipeId);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
}

module.exports = {
    getRecipeById: ctrlWrapper(getRecipeById),
}


