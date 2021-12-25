const express = require('express')
const bcrypt = require("bcrypt")
const User = require("../../models/User")
const verifyJWT = require("../../verifyJWT")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.get("/isUserAuth", verifyJWT, (req, res) => {
    return res.json({isLoggedIn: true, username: req.user.username})
})

router.post("/login", async (req, res) => {
    try {
      const username = req.body.username;
      const Password = req.body.password;
  
      const user = await User.findOne({Username: username});
  
      if (!(username && Password)) {
        res.status(400).send("All input is required");
      }
      if (user && (await bcrypt.compare(Password, user.Password))) {
        const payload = {
          user_id: user._id,
          username: user.username,
          password: user.password
        }
        jwt.sign(
          payload, 
          "Mangos-secretkey",
          {expiresIn: 300},
          (err, token) => {
              return res.json({user: user, message: "Success", token: "Bearer " + token})
          }
        )
      }
      else{
        res.send("incorrect username and/or password");
      }
    } catch (err) {
      console.log(err);
    }
});

router.post("/register", async (req, res) => {

    try {
      const username = req.body.username;
      const Password = req.body.password;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const homeaddress = req.body.homeaddress;
      const countrycode = req.body.countrycode;
      const phonenumber = req.body.phonenumber;
      const Email = req.body.email;
      const passportnumber = req.body.passportnumber;
  
      const oldUser = await User.findOne({ Username:username });
      const takenEmail = await User.findOne({ Email:Email });
  
      if(oldUser && takenEmail){
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      if (oldUser || takenEmail) {
        return res.status(409).send("Username or Email has already been taken");
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
  
      res.status(201).json(user);
      
    } catch (err) {
      console.log(err);
    }
  
});

module.exports = router