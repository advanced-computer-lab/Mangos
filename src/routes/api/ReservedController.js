const express = require('express');
const router = express.Router();

const ReservedFlight = require('../../models/ReservedFlights');

router.post('/', (req, res) => {
  ReservedFlight.create(req.body)
    .then(reservedflight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
});

router.get('/:id', (req, res) => {

  ReservedFlight.find({userid: req.params.id})
    .then(ReservedFlight => res.json(ReservedFlight))
    .catch(err => res.status(404).json({ noflightfound: 'No flight found' }));
});

router.post('/Delete', (req, res) => {
  const id = req.body._id
  ReservedFlight.findByIdAndRemove(id)
    .then(flight => res.json({ mgs: 'flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such flight' }));
});



router.get('/', (req, res) => {
  ReservedFlight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
});

module.exports = router;