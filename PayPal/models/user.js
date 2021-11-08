const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'comment'
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)
