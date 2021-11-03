const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'user added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No users found' }));
});
//to be updated---
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(flight))
    .catch(err => res.status(404).json({ noflightfound: 'No user found' }));
});
//---
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'user entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user' }));
});

module.exports = router;