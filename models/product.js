const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const product = new Schema({
  title:  {type: String, required: true},
  description: {type: [String], required: true},
  colors: {type: [{
    value:  {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true}
  }], required: true} 
});

const Product = mongoose.model('Product', product);
module.exports = Product; 