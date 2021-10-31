const express = require('express');
const router = express.Router();

const Flight = require('../../models/Flight');

router.get('/test', (req, res) => res.send('flight route testing!'));

router.get('/', (req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightfound: 'No flights found' }));
});


router.get('/:id', (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noflightfound: 'No flight found' }));
});

router.post('/', (req, res) => {
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
  console.log("data entered");
});

router.put('/:id', (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then(flight => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'Flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a flight' }));
});