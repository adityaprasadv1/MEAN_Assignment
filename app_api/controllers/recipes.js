const mongoose = require("mongoose");
const Recipe = mongoose.model("Recipie");

const getRecipes = (req, res) => {
    Recipe.find().exec(function (err, recipeData) {
    if (err) {
        res.status(404).json(err);
        return;
    }
    res.status(200).json(recipeData);
    });
};

const createRecipe = (req, res) => {
    Recipe.create(
        {
            name: req.body.name,
            type: req.body.type,
            info: req.body.info,
            ingredients: req.body.ingredients.split(','),
            banners: {
                isNewer: req.body.banners.isNewer,
                isFeatured: req.body.banners.isFeatured
            },
        },
        (err, recipeData) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(recipeData);
            }
        }
    );
};

const getSingleRecipe = (req, res) => {
    Recipe.findById(req.params.recipeid).exec((err, recipeData) => {
        if (!recipeData) {
            return res.status(404).json({
                message: "Recipe not found!",
            });
        } else if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(recipeData);
    });
};

const updateRecipe = (req, res) => {
    if (!req.params.recipeid) {
            res.status(404).json({
            message: "Not found, Recipe ID is required!",
        });
        return;
    }
    
    Recipe.findById(req.params.recipeid).exec((err, recipeData) => {
        if (!recipeData) {
            res.status(404).json({
                message: "Recipe ID not found!",
            });
            return;
        } else if (err) {
            res.status(400).json(err);
            return;
        }

        recipeData.name = req.body.name;
        recipeData.type = req.body.type;
        recipeData.info = req.body.info;
        recipeData.ingredients = req.body.ingredients.toString().split(',');
        recipeData.banners = {
            isNewer: req.body.banners.isNewer,
            isFeatured: req.body.banners.isFeatured
        };

        recipeData.save((err, recipeData) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(recipeData);
            }
        });
    });
};

const deleteRecipe = (req, res) => {
    if (req.params.recipeid) {
        Recipe.findByIdAndRemove(req.params.recipeid).exec((err, recipeData) => {
            if (err) {
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    } else {
        res.status(404).json({ message: "Recipe ID not found!" });
    }
};

module.exports = {
    getRecipes,
    createRecipe,
    getSingleRecipe,
    updateRecipe,
    deleteRecipe
}