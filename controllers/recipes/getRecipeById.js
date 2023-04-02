const { RecipeTest } = require("../../models/test_recipe");

const { HttpError, ctrlWrapper } = require("../../helpers");

const getRecipeById = async (req, res) => {
    const { recipeId } = req.params;
    const result = await RecipeTest.findById(recipeId).populate("ingredients_new");
    if (!result) {
        throw HttpError(404, "Not found");
    }

    // const oldRecipes = await RecipeTest.find();

    // oldRecipes.forEach(async (rec) => {
    // await User.updateOne({ _id: rec._id }, { $unset: { role: 1 } });
    // console.log("rec.ingredients :>> ", rec.ingredients);
    // const newIngredArray = rec.ingredients.map((el) => el.id);
    // console.log("newIngredArray :>> ", newIngredArray);
    // await RecipeTest.findByIdAndUpdate(rec._id, { ingredients_new: newIngredArray });
    // await RecipeTest.findByIdAndUpdate(rec._id, { $unset: { ingredients: 1 } });

    // await RecipeTest.update({ _id: rec._id }, { $unset: { field: 1 } });
    // });

    // await RecipeTest.updateMany({}, { $unset: { ingredients: "" } });

    // res.json({
    //     resp: RecipeTest.find()[0],
    // });

    res.json(result);
};

module.exports = {
    getRecipeById: ctrlWrapper(getRecipeById),
};
