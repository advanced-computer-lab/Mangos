const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flightnumber: {
    type: String,
    required: true
  },
  departuretime : {
    type: String,
    required: true
  },
  arrivaltime: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  tripduration:{
    type: String,
    required: true
  },
  baggageallowance:{
    type: String,
    required: true
  },
  airportterminal: {
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
