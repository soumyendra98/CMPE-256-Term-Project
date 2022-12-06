const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    reviewer_id: { type: String, required: true },
    recipe_id: { type: String, required: true },
    review_date: { type: Date, required: true },
    rating: { type: Number },
    review: { type: String },
  },
  {
    timestamps: true,
    collection: "Food",
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
