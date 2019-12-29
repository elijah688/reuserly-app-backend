const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const flute = new Schema({
  title:  {type: String, required: true},
  description: {type: [String], required: true},
  colors: {type: [{
    value:  {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    buy_link: {type: String, required: true},
  }], required: true} 
});

const Flute = mongoose.model('Flute', flute);
module.exports = Flute; 
