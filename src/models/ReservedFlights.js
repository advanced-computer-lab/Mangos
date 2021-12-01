const mongoose = require('mongoose');

const ReservedFlightSchema = new mongoose.Schema({
  flightid: {
    type: String,
    required: true
  },
  userid : {
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
  price:{
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
  cabin :{
    type: String,
    required: true
  },
  adults : {
    type: String,
    required: true
  },
  children : {
    type: String,
    required: true
  }
});


module.exports = ReservedFlight = mongoose.model('reservedflight', ReservedFlightSchema);;
