const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

const listDisplay = function (req, res, next) {
    res.render('list-display', { 
        title: "Herbal Kitchen - Recipes", 
        recipeData: next
    });
}

const recipeList = function(req, res) {
    const path = "/api/recipes";
    const requestOptions = {
      url: apiOptions.server + path,
      method: "GET",
      json: {},
    };
    request(requestOptions, (err, response, body) => {
        listDisplay(req, res, body);
    });    
};

const detailPage = function(req, res, next) {
    res.render('details', { 
        title: "Herbal Kitchen - Detailed Page",
        recipeData: next
    });
};

const recipeDetail = function(req, res) {
    const path = `/api/recipes/${req.params.recipeid}`;
    const requestOptions = {
      url: apiOptions.server + path,
      method: "GET",
      json: {},
    };
    request(requestOptions, (err, response, body) => {
        detailPage(req, res, body);
    });
};

const addNewRecipePage = function(req, res) {
    res.render('create', { 
        title: "Herbal Kitchen - Create Recipe Page",
    });
}

const doAddNewRecipe = function(req, res) {
    const path = '/api/recipes';
    const postData = {
        name: req.body.name,
        type: req.body.type,
        info: req.body.info,
        ingredients: req.body.ingredients,
        banners: {
            isNewer: req.body.isNewer === "on" ? true : false,
            isFeatured: req.body.isFeatured === "on" ? true : false
        }
    };
    const requestOptions = {
      url: apiOptions.server + path,
      method: "POST",
      json: postData,
    };
    request(requestOptions, (err, response, body) => {
        if(response.statusCode === 201) {
            res.redirect('/list');
        }
    });
}

module.exports = {
    recipeList,
    recipeDetail,
    addNewRecipePage,
    doAddNewRecipe
};