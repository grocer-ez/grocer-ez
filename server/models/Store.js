const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List'
    }
  ],
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
