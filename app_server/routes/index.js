var express = require('express');
var router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlAbout = require('../controllers/about');
const ctrlRecipes = require('../controllers/recipes');

/* GET home page. */
router.get('/', ctrlOthers.index);
router.get('/about', ctrlAbout.about);
router.get('/list', ctrlRecipes.recipeList);
router.get('/display', ctrlOthers.display);

module.exports = router;
