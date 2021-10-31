const express = require('express');
const connectDB = require('./config/db');
const Flight = require('./models/Flight');
const User = require('./models/User');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.post("/CreateFlight",(req,res)=> {
    Flight.insertMany([
      { from:'Betra',
        to:'JFK',
        FlightDate:12-1-2022,
        Cabin:'Economy',
        seatsAvailable:20}
  ]).then(function(){
      console.log("Data inserted") 
  }).catch(function(error){
      console.log(error) 
  });
  });
app.get("/find", (req,res) =>{
    Flight.find({}).then(result=>{
      console.log("found");
      res.send(result);
    })
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));