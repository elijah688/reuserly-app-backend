const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: String, required: true},
  image: {type: String, required: true},
  edition: {type: Number, required: true},
  year: {type: Date, required: true},
  price: {type: Number, required: true},
  buy_link: {type: String, required: true},
});

const Book = mongoose.model('Book', BookSchema );

module.exports = Book;
