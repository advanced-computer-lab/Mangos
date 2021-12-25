const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const log = console.log;

const User = require('../../models/User');



router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'user added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(users))
    .catch(err => res.status(404).json({ noUsersfound: 'No users found' }));
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ noUserfound: 'No user found' }));
});

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

router.post('/email', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aclbetra@gmail.com', // TODO: your gmail account
        pass: 'betra123' // TODO: your gmail password
    }
  });
  
  
  let mailOptions = {
    from: 'test@gmail.com', // TODO: email sender
    to: 'yfriller@gmail.com', // TODO: email receiver
    subject: 'reservation',
    text: 'Your ticket has been reserved.'
  };
 transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          return log('Error occurs');
      }
      return log('Email sent!!!');
    });
});
router.post('/emailupdate', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aclbetra@gmail.com', // TODO: your gmail account
        pass: 'betra123' // TODO: your gmail password
    }
  });
  
  
  let mailOptions = {
    from: 'test@gmail.com', // TODO: email sender
    to: 'yfriller@gmail.com', // TODO: email receiver
    subject: 'reservation',
    text: 'Your ticket has been updated.'
  };
 transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          return log('Error occurs');
      }
      return log('Email sent!!!');
    });
});
router.post('/emailAgain', (req, res) => {

  console.log(req.body);
  const from = req.body.from;
  const to = req.body.to;
  const departuretime = req.body.departuretime;
  const arrivaltime = req.body.arrivaltime;
  const cabin = req.body.cabin;
  const adults = req.body.adults;
  const children = req.body.children;
  const Body = "from: "+from + "\n" +"to: "+to + "\n"+"departuretime: "+departuretime + "\n"+"arrivaltime: "+arrivaltime + "\n"+"cabin: "+cabin + "\n"+"adults: "+adults + "\n"+"children: "+children + "\n";
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aclbetra@gmail.com', // TODO: your gmail account
        pass: 'betra123' // TODO: your gmail password
    }
  });
  let mailOptions = {
    from: 'test@gmail.com', // TODO: email sender
    to: 'yfriller@gmail.com', // TODO: email receiver
    subject: 'reservation',
    text: Body
  };
 transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          return log('Error occurs');
      }
      return log('Email sent!!!');
    });
});

module.exports = router;