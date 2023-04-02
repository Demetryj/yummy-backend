const { Recipe } = require("../../models/recipe");

const { HttpError, ctrlWrapper } = require("../../helpers");

const getRecipeById = async (req, res) => {
    const { recipeId } = req.params;
    const result = await Recipe.findById(recipeId).populate("ingredients");
    if (!result) {
        throw HttpError(404, "Not found");
    }

    // const oldRecipes = await Recipe.find();

    // oldRecipes.forEach(async (rec) => {
    //     const newIngredArray = rec.ingredients.map((el) => el.id);

    //     await Recipe.findByIdAndUpdate(rec._id, { ingredients: newIngredArray });
    // });

    // await Recipe.updateMany({}, { $unset: { ingredients: "" } });

    // res.json({
    //     resp: Recipe.find()[0],
    // });

    // console.log("result :>> ", result);

    res.json(result);
};

module.exports = {
    getRecipeById: ctrlWrapper(getRecipeById),
};
