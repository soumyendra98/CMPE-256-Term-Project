const express = require("express");

const router = express.Router();

const recipeController = require("../Controllers/Recipe");
// const reviewController = require("../Migrations/Reviews");

// Route to get All recipes
router.get("/getAll", recipeController.getAll);

// Route to get a recipe by ID
router.get("/getById/:id", recipeController.getById);

// Route to get Recommended Recipes by Name
router.get("/getRecommended/:name", recipeController.getRecommended);

// Test
// router.get("/test", reviewController.addReviews);
module.exports = router;
