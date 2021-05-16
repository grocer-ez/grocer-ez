// Cori: I think we can rename this model into our History.js file that will hold the structure for our history

const mongoose = require('mongoose');

const { Schema } = mongoose;

const historySchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List'
    }
  ]
});

const Store = mongoose.model('Store', historySchema);

module.exports = History;
