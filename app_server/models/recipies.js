const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    isNewer: { 
        type: Boolean,
        default: false

    },
    isFeatured: { 
        type: Boolean,
        default: false
    }
});

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const recipeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    type: { 
        type: String,
        required: true
    },
    info: { 
        type: String,
        required: true,
        maxlength: 128
    },
    ingredients: { 
        type: [ingredientSchema],
        required: true
    },
    banners: { 
        type: bannerSchema,
        required: true
    }
});

mongoose.model('Recipe', recipeSchema);