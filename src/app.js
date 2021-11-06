const express = require('express');
const connectDB = require('./config/db');

var cors = require('cors');

const userController = require('./routes/api/userController');
const flightController = require('./routes/api/FlightController');

const Flight = require('./models/Flight');
//const User = require('./models/User');


const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/FlightController', flightController);
app.use('/api/userController', userController);



app.listen(port, () => console.log(`Server running on port ${port}`));

app.post('/SearchFlight', (req, res) => {

    // const FlightNumber = req.body.flightnumber;
    // const departuretime = req.body.departuretime;
    // const arrivaltime=req.body.arrivaltime
    // const airport=req.body.airport
    // const from=req.body.from
    // const to=req.body.to
  
    // console.log("FlightNumber: "+FlightNumber)
    // console.log("departuretime: "+departuretime)
    // console.log("arrivaltime: "+arrivaltime)
    // console.log("airport: "+airport)
    // console.log("from: "+from)
    // console.log("to: "+to)
    Flight.find(
    //{flightnumber: 222 
      // departuretime: departuretime, 
      // arrivaltime: arrivaltime, 
      // airport: airport, 
      // from: from, 
      // to: to }
      req.body
      //}
    )
      .then(flights => res.json(flights))
      .catch(err => res.status(404).json({ noflightsfound: 'No flights found' }));
  });



/*
app.get('/view-users',flightController.viewUsers)
app.get('/get-all-users/:name', userController.getUser)
app.put('/update-user/:id',userController.updateUser)
app.delete('/delete-user/:id',userController.deleteUser) 
*/