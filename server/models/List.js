const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const storeSchema = require('./Store');

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
  stores: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Store'
    }
  ],
});
// 

const List = mongoose.model('List', listSchema);


module.exports = List;