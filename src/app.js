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
/*app.get('/test',(req, res) =>
Flight.find({
    '_id': [
        "61a028ae7076e18f2947cb21",
        "61a028ea7076e18f2947cb23"
    ]
})
.then(flights => res.json(flights))
.catch(err => res.status(404).json({ noflightsfound: 'No flights found' })));*/

app.listen(port, () => console.log(`Server running on port ${port}`));





/*
app.get('/view-users',flightController.viewUsers)
app.get('/get-all-users/:name', userController.getUser)
app.put('/update-user/:id',userController.updateUser)
app.delete('/delete-user/:id',userController.deleteUser) 
*/