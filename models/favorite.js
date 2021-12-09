const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  authors: [String],
  publishedDate: Date,
  thumbnail: String,
  categories: [String],
  description: String,
  readLink: String,
  ratings: Number,
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
