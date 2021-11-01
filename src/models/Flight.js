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
    type: String,
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
const Flight = mongoose.model('flight', FlightSchema);
module.exports = Flight;
