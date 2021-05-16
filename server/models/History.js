// Cori: I think we can rename this model into our History.js file that will hold the structure for our history

const mongoose = require('mongoose');

const { Schema } = mongoose;

const historySchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  list: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List'
    }
  ]
});

const History = mongoose.model('History', historySchema);

module.exports = History;
