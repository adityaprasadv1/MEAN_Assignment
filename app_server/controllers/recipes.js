let recipeData = [
    {
        name: "Dosa",
        type: "Breakfast",
        info: "A dosa or dose is a thin pancake or crepe, originating from South India, made from a fermented batter predominantly consisting of lentils and rice. It is somewhat similar to a crepe in appearance, although savoury flavours are generally emphasized.",
        ingredients: [
            "Rice",
            "Dosa rice",
            "Urad dal",
            "Fenugreek seeds",
            "Flattend rice",
            "Water",
            "Salt",
            "Oil"
        ],
        isNew: true,
        isFeatured: true
    },
    {
        name: "Poutine",
        type: "Lunch",
        info: "Poutine is a dish of french fries and cheese curds topped with a brown gravy. It emerged in Quebec, Canada, in the late 1950s in the Centre-du-Québec region, though its origins are uncertain and there are several competing claims of having invented the dish.",
        ingredients: [
            "Potato",
            "Gravy",
            "Cheese",
            "Salt",
            "Oil"
        ],
        isNew: false,
        isFeatured: true

    },
    {
        name: "Biryani",
        type: "Dinner",
        info: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties. Biryani is popular throughout the Indian subcontinent, as well as among its diaspora.",
        ingredients: [
            "Basmati rice",
            "Spices",
            "Curd",
            "Panner cheese",
            "Green chillies",
            "Salt",
            "Oil",
        ],
        isNew: false,
        isFeatured: false
    }
];

const recipeList = function(req, res) {  
    res.render('list-display', { 
        title: "Herbal Kitchen - Recipes", 
        recipeData: recipeData
    });
};

module.exports = {
    recipeList
};