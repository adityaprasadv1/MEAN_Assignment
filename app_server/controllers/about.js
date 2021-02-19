/* Get about page. */
const about = function(req, res) {
    res.render('about', {
        title: "Herbal Kitchen - About", 
        aboutUsTitle: "About my site",
        aboutUs: "Want to cook healthy and delicious food? The Herbal Kitchen has recipes curated from ancient parts of India. We even have state of the art technology to accept ingredients list from you and provide a list of recipes you can prepare. Give it a try, you will love it!"
    });
};

module.exports = {
    about
};