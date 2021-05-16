// Cori: I think we can rename this model to hold our list items?

const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const listSchema = new Schema({
  item: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String
  },
  createdAT: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const List = mongoose.model('List', listSchema);

module.exports = List;
