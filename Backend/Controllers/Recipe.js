const Recipe = require("../Models/Recipe");

const getAll = async (req, res) => {  
    const recentlyAdded = await Recipe.find({}).sort({recipe_upload_date: -1}).limit(20);

    const mostPopular = await Recipe.find({}).sort({rating: -1, review_date: -1}).limit(20);

    res.json({ 
        recently_added: recentlyAdded,
        most_popular: mostPopular,
        message: "Get All Recipes" 
    });
}

const getById = async (req, res) => {
    const recipe = await Recipe.findOne({recipe_id: req.params.id}); 
    res.json({ 
        recipe_details: recipe,
        message: "Get Recipe by ID, ID is " + req.params.id
    });
}

const getRecommended =  (req, res) => {
    res.json({ message: "Get Recommended Recipes by name " + req.params.name });
}

module.exports = {getAll, getById, getRecommended}