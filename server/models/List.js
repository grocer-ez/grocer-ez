// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const productSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String
//   },
//   image: {
//     type: String
//   },
//   price: {
//     type: Number,
//     required: true,
//     min: 0.99
//   },
//   quantity: {
//     type: Number,
//     min: 0,
//     default: 0
//   },
//   category: {
//     type: Schema.Types.ObjectId,
//     ref: 'Category',
//     required: true
//   }
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const listSchema = new Schema({
  item: {
    type: String,
    required: true,
    trim: true
  },
  
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
});

// const List = mongoose.model('List', listSchema);

module.exports = listSchema;


