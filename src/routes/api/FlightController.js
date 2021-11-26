const express = require('express');
const router = express.Router();

const Flight = require('../../models/Flight');


router.post('/', (req, res) => {
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
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
  airport=req.body.airport;
  from=req.body.from;
  to=req.body.to;
  Flight.find(
  req.body
  )
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});
router.post('/availableFlights', (req, res) => {
  from = req.body.from;
  to = req.body.to;
  departure = req.body.departure;
  arrival =  req.body.arrival;
  Cabin = req.body.Cabin;
  AdultdefaultOption = req.body.Adults;
  ChildrendefaultOption = req.body.Children;
  Flight.find(
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