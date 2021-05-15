// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const categorySchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   }
// });

// const Category = mongoose.model('Category', categorySchema);

// module.exports = Category;

const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const listSchema = require('./List')

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,    
  },
  lists: [listSchema]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
