const Review = require("../Models/Review");
const Recipe = require("../Models/Recipe");

const addReviews = async (req, res) => {
  console.log("Adding Reviews");
  const recipes = await Recipe.find({}, { review: 0 });
  let i = 0;
  for (recipe of recipes) {
    const reviews = await Review.find(
      { recipe_id: recipe.recipe_id },
      { reviewer_id: 1, review_date: 1, rating: 1, review: 1, _id: 0 }
    );
    recipe.reviews = reviews;
    await Recipe.updateOne({ recipe_id: recipe.recipe_id }, recipe);
  }

  res.json({ message: "Added Reviews", recipes: recipe });
};

module.exports = { addReviews };
