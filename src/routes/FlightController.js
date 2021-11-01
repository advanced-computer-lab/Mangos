// #Task route solution
const Flight = require('../models/Flight');
exports.addFlight = (req, res) => {

    const flight = new Flight(req.body)

    flight.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  };
// getting all the users

exports.viewFlights = (req, res) => {
    Flight.find({})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
    };

    exports.getFlight = (req, res) => {
      Flight.find({Name:req.params.name})
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
    };

    exports.updateFlight = (req,res)=>{
      Flight.findByIdAndUpdate(req.params.id,req.body).then(result =>{

          res.status(200).send("Flight updated ");
          console.log('The Flight is Updated successfully !');
      }).catch(err => {
          console.log(err);
        });

    };

    //Deleting an existing user
    exports.deleteFlight = (req,res)=>{
      Flight.findByIdAndRemove(req.params.id).then(result =>{

          res.status(200).send("Flight Deleted ");
          console.log("The Flight is deleted successfully !");
      }).catch(err => {
          console.log(err);
        });

    };