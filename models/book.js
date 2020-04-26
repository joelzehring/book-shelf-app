const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({ name: String });
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [AuthorSchema],
  description: String,
  image: { type: String, default: "https://picsum.photos/id/237/200/300" },
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;