const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  count: {
    type: Number,
    required: true,
    min: 0,
  },
});

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    type: RatingSchema,
    required: true,
  },
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = { ProductModel };
