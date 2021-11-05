const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flightnumber: {
    type: String,
    required: true
  },
  departuretime : {
    type: Date,
    required: true
  },
  arrivaltime: {
    type: Date,
    required: true
  },
  airport: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  /*FlightDate: {
    type: String,
    required: true
  },*/
  Economyseats: {
    type: Number,
    required: true
  },
  Businessseats: {
    type: Number,
    required: true
  },
  Firstclassseats: {
    type: Number,
    required: true
  }
});


module.exports = Flight = mongoose.model('flight', FlightSchema);;
