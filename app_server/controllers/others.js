/* Get home page. */
const index = function(req, res) {
    res.render('index', { 
        title: "Herbal Kitchen",
        subHeading: "The art of Cooking!"
    });
};

const display = function(req, res) {
    res.render('display', { 
        title: "Herbal Kitchen - Display",
        heading: "Not Implimented",
        subHeading: "Good things come to those who wait!"
    });
};

module.exports = {
    index,
    display
};