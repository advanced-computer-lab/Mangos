const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require("body-parser")

var cors = require('cors');

const userController = require('./routes/api/userController');
const flightController = require('./routes/api/FlightController');
const ReservedController = require('./routes/api/ReservedController');
const authRoutes = require("./routes/api/authRoutes")

const Flight = require('./models/Flight');
const User = require('./models/User');


const app = express();
const port = process.env.PORT || 8000;
const router = express.Router()


connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)


app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/FlightController',flightController);
app.use('/api/ReservedController', ReservedController);
app.use('/api/userController',userController);
app.use('/api/authRoutes',authRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));



