const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const protector = new Schema({
  title:  {type: String, required: true},
  description: {type: [String], required: true},
  sizes: {type: [{
    size:  {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    buy_link: {type: String, required: true},
  }], required: true} 
});

const Protector = mongoose.model('Protector', protector);
module.exports = Protector; 
