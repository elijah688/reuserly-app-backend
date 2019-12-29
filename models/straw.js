const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const straw = new Schema({
  title:  {type: String, required: true},
  description: {type: [String], required: true},
  colors: {type: [{
    value:  {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    buy_link: {type: String, required: true},
  }], required: true} 
});

const Straw = mongoose.model('Straw', straw);
module.exports = Straw; 
