export {};
const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  // password: {
  //   required: true,
  //   type: String
  // },
  // mobile: {
  //   required: true,
  //   type: Number
  // }
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);