const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    reviewer_id: { type: String, required: true },
    recipe_id: { type: String, required: true },
    review_date: { type: Date, required: true },
    rating: { type: Number },
    review: { type: String },
    name: { type: String, required: true },
    minutes: { type: Number, required: true },
    contributor_id: { type: String },
    recipe_upload_date: { type: Date },
    tags: { type: String },
    n_steps: { type: Number },
    steps: { type: String },
    ingredients: { type: String, required: true },
    n_ingredients: { type: Number, required: true },
    calories: { type: Number },
    total_fat: { type: Number },
    sugar: { type: Number },
    sodium: { type: Number },
    protein: { type: Number },
    saturated_fat: { type: Number },
    carbohydrates: { type: Number },
    veg: { type: String },
    non_veg: { type: String },
    sweet: { type: String },
    savory: { type: String },
    cuisine_american: { type: String },
    cuisine_asian: { type: String },
    cuisine_australian: { type: String },
    cuisine_european: { type: String },
    cuisine_indian: { type: String },
    cuisine_other: { type: String },
    rec_ingredients: { type: String },
    rec_ingredients_steps: { type: String },
    rec_combined: { type: String },
  },
  {
    timestamps: true,
    collection : 'Food Sample' 
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
