const express = require("express");

const router = express.Router();

const recipeController = require("../Controllers/Recipe");

// Route to get All recipes
router.get("/getAll", recipeController.getAll);

// Route to get a recipe by ID
router.get("/getById/:id", recipeController.getById);

// Route to get Recommended Recipes by Name
router.get("/getRecommended/:searchType&:searchTerm", recipeController.getRecommended);

module.exports = router;
