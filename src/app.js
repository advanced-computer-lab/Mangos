const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const userController = require('./routes/userController');

/*
const flightController = require('./routes/FlightController');
const Flight = require('./models/Flight');
const User = require('./models/User');
*/

const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Hello world!'));




app.post('/SignUp', userController.addUser)

app.listen(port, () => console.log(`Server running on port ${port}`));





/*
app.get('/view-users',flightController.viewUsers)
app.get('/get-all-users/:name', userController.getUser)
app.put('/update-user/:id',userController.updateUser)
app.delete('/delete-user/:id',userController.deleteUser) 
*/