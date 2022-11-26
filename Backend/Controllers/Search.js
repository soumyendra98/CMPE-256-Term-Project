const Recipe = require("../Models/Recipe");

const searchItems = async (req, res, next) => {
    const searchedNames = await Recipe.find({recipe_name: {$regex: req.params.searchTerm, $options: 'i'}}, {name: 1}).limit(10);
    res.json({ 
        searched_names: searchedNames,
        message: "Search Items by " + req.params.searchTerm 
    });
};

module.exports = {searchItems}