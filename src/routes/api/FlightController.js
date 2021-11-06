const express = require('express');
const router = express.Router();

const Flight = require('../../models/Flight');


router.post('/', (req, res) => {
  // var FlightNumber = req.body.flightnumber;
  // var departuretime = req.body.departuretime;
  // var arrivaltime=req.body.arrivaltime
  // var airport=req.body.airport
  // var from=req.body.from
  // var to=req.body.to
  // var Economyseats=req.body.Economyseats
  // var Businessseats=req.body.Businessseats
  // var Firstclassseats=req.body.Firstclassseats

  Flight.create(req.body)
    .then(flight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
  // Flight.insertMany([
  // { flightnumber: FlightNumber, 
  //   departuretime: departuretime, 
  //   arrivaltime: arrivaltime, 
  //   airport: airport, 
  //   from: from, 
  //   to: to, 
  //   Economyseats: Economyseats, 
  //   Businessseats: Businessseats,
  //   Firstclassseats : Firstclassseats }
  // ]).then(function(){
  //   console.log("Data inserted") 
  // }).catch(function(error){
  //   console.log(error)      
  // });
});

router.get('/', (req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});
router.post('/SearchFlight', (req, res) => {

  FlightNumber = req.body.flightnumber;
  departuretime = req.body.departuretime;
  arrivaltime=  req.body.arrivaltime
  airport=req.body.airport
  from=req.body.from
  to=req.body.to


  
  console.log(req.body);
  console.log("FlightNumber: "+FlightNumber)
  console.log("departuretime: "+departuretime)
  console.log("arrivaltime: "+arrivaltime)
  console.log("airport: "+airport)
  console.log("from: "+from)
  console.log("to: "+to)
  Flight.find(
  // { flightnumber: FlightNumber,
  //   departuretime: departuretime,
  //   arrivaltime: arrivaltime,
  //   airport: airport,
  //   from: from,
  //   to: to
  // }
  req.body
  )
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});
//to be updated---
router.get('/:id', (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noflightfound: 'No flight found' }));
});
//---
router.put('/:id', (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then(flight => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a flight' }));
});

module.exports = router;