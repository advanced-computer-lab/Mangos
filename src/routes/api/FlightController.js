const express = require('express');
const router = express.Router();

const Flight = require('../../models/Flight');

router.post('/', (req, res) => {
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
});
router.post('/Update', (req, res) => {
  const flightid = req.body.flightid;
  const cabin = req.body.cabin;
  const adults = req.body.adults;
  const children = req.body.children;
  const total = parseInt(adults) + parseInt(children);
  
  switch(cabin) {
    case 'Economy Class':
      totalseats = flightid.Economyseats;
      final = totalseats - total; 
      Flight.findByIdAndUpdate(flightid._id, {Economyseats:final})
      .then(flight => res.json({ mgs: 'flight entry updated successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a flight' }));
      break;
    case 'Business Class':
      totalseats = flightid.Businessseats;
      final = totalseats - total; 
      Flight.findByIdAndUpdate(flightid._id,{Businessseats:final})
      .then(flight => res.json({ mgs: 'flight entry updated successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a flight' }));
      break;
    case 'First Class':
      totalseats = flightid.Firstclassseats;
      final = totalseats - total; 
      Flight.findByIdAndUpdate(flightid._id,{Firstclassseats:final})
      .then(flight => res.json({ mgs: 'flight entry updated successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a flight' }));
      break;
  }
});

router.post('/Change', (req, res) => {
  //req.body[0] --> reserved flight Card, req.body[1] --> flight Card
  const flightid = req.body[0].flightid;
  const cabin = req.body[0].cabin;
  const adults = req.body[0].adults;
  const children = req.body[0].children;
  const total = parseInt(adults) + parseInt(children);
  switch(cabin) {
    case 'Economy Class':
      totalseats = req.body[1].Economyseats;
      final = totalseats + total; 
      Flight.findByIdAndUpdate(flightid, {Economyseats:final})
      .then(flight => res.json({ mgs: 'flight entry updated successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a flight' }));
      break;
    case 'Business Class':
      totalseats = req.body[1].Businessseats;
      final = totalseats + total; 
      Flight.findByIdAndUpdate(flightid,{Businessseats:final})
      .then(flight => res.json({ mgs: 'flight entry updated successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a flight' }));
      break;
    case 'First Class':
      totalseats = req.body[1].Firstclassseats;
      final = totalseats + total; 
      Flight.findByIdAndUpdate(flightid,{Firstclassseats:final})
      .then(flight => res.json({ mgs: 'flight entry updated successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a flight' }));
      break;
  }
});


router.get('/', (req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});

router.post('/findids', (req, res) => {
  Flight.find({
    '_id': req.body
  })
.then(flights => res.json(flights))
.catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});

router.post('/SearchFlight', (req, res) => {
  Flight.find(
    req.body
  )
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});
router.post('/availableFlights', (req, res) => {
  Cabin = req.body.Cabin;
  Adults = req.body.Adults;
  Children = req.body.Children;
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