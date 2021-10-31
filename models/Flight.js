const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
    to: {
    type: String,
    required: true
  },
    FlightDate: {
    type: Date,
    required: true
  },
    Cabin: {
    type: String,
    required: true
  },
  seatsAvailable: {
    type: Number,
    required: true
  }
});

module.exports = Flight = mongoose.model('flight', FlightSchema);