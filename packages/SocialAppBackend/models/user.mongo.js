const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobbies',
    required: false,

  }]
});

module.exports = mongoose.model('SocialUser', userSchema);
