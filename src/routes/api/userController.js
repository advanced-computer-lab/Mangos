const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require('../../models/User');

router.post("/register", async (req, res) => {

  try {
    console.log(req.body);
    const username = req.body.username;
    const Password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const homeaddress = req.body.homeaddress;
    const countrycode = req.body.countrycode;
    const phonenumber = req.body.phonenumber;
    const Email = req.body.email;
    const passportnumber = req.body.passportnumber;


    // if (!(username && Password && firstname && lastname && homeaddress && countrycode && phonenumber && Email && passportnumber)) {
    //   res.status(400).send("All input is required");
    // }
    const oldUser = await User.findOne({ Username:username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(Password, 10);

    const user = await User.create({
      Username: username, 
      Password: encryptedPassword,
      FirstName: firstname,
      LastName: lastname,
      HomeAddress: homeaddress,
      CountryCode: countrycode,
      PhoneNumber:phonenumber,
      Email: Email,
      PassportNumber: passportnumber,
      isAdmin: false
    });

    const token = jwt.sign(
      { user_id: user._id, username },
      "test123",
      {
        expiresIn: "1m",
      }
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }

});

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const Password = req.body.password;

    const user = await User.findOne({Username: username});

    if (!(username && Password)) {
      res.status(400).send("All input is required");
    }
    if (user && (bcrypt.compare(Password, user.Password))) {
      const token = jwt.sign(
        { user_id: user._id, user },
        "test123",
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      console.log(token);
      res.json(user);
      return;
    }
    else{
      res.send("incorrect username and/or password");
    }
  } catch (err) {
    console.log(err);
  }
});

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

module.exports = router;