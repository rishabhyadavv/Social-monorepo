const mongoose = require('mongoose');

const hobbiesSchema = new mongoose.Schema({
  hobby: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Hobbies', hobbiesSchema);
