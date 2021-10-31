const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
    Password: {
    type: String,
    required: true
  },
    FirstName: {
    type: String,
    required: true
  },
    LastName: {
    type: String,
    required: true
  },
    HomeAddress: {
    type: String,
    required: true
  },
    CountryCode: {
    type: Number,
    required: true
  },
    PhoneNumber: {
    type: Array,
    required: true
  },
    Email: {
    type: String,
    required: true
  },
    PassportNumber: {
    type: Number,
    required: true
  },
    isAdmin: {
    type: Boolean,
    required: true
}
});
const User = mongoose.model('user', UserSchema);
module.exports = User;