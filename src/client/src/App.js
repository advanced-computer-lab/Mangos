import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//Admin
import Navbar  from './components/Nav/index'
import admin from './pages/Admin/Admin';
import CreateFlight from './pages/Admin/CreateFlight';
import ShowFlightsList from './pages/Admin/ShowFlightsList';
import SearchPage from './pages/Admin/SearchPage';
import SearchFlight from './pages/Admin/SearchFlight';
import ShowFlightDetails from './pages/Admin/ShowFlightDetails';
import UpdateFlightInfo from './pages/Admin/UpdateFlightInfo';
//----

//User
import UserNavbar  from './components/Nav/Userindex'
import User from './pages/User/User';
import Account from './pages/User/Account';
import UpdateUserInfo from './pages/User/UpdateUserInfo';
import UserReservedFlights from './pages/User/UserReservedFlights';
import UserSelectedFlights from './pages/User/UserSelectedFlights';
import UserFlightDetails from './pages/User/UserFlightDetails';
import UseravailableFlights from './pages/User/UseravailableFlights';
//---

//Home
import HomeNavbar  from './components/Nav/Homeindex'
import Homepage from './pages/HomePages/Homepage.js';
import FlightDetails from './pages/showdetails';
import selectedflights from './pages/selectedflights';
import availableflights from './pages/availableFlights';
//---

import Login from './pages/SignIn';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage,HomeNavbar}/>
          <Route exact path='/flightdetails/:id' component={FlightDetails}/>
          <Route exact path='/selectedflights' component={selectedflights}/>
          <Route exact path='/availableFlights' component={availableflights}/> 

          <Route exact path='/SignIn' component={Login} />
          
          <Route exact path='/User' component={User} />
          <Route exact path='/Account' component={Account,UserNavbar} />
          <Route exact path='/UpdateUserInfo/:id' component={UpdateUserInfo,UserNavbar} />
          <Route exact path='/UserFlightDetails/:id' component={UserFlightDetails,UserNavbar}/>
          <Route exact path='/UserSelectedFlights' component={UserSelectedFlights,UserNavbar}/>
          <Route exact path='/UseravailableFlights' component={UseravailableFlights,UserNavbar}/>
          <Route exact path='/ReservedFlights' component={UserReservedFlights,UserNavbar}/>
          

          <Route exact path='/Admin' component={admin} />
          <Route exact path='/show-flights'  component={ShowFlightsList,Navbar}/>
          <Route exact path='/SearchFlight' component={SearchFlight,Navbar}/>
          <Route exact path='/create-flight' component={CreateFlight,Navbar}/>
          <Route exact path='/edit-flight/:id' component={UpdateFlightInfo,Navbar}/>
          <Route exact path='/show-flight/:id' component={ShowFlightDetails,Navbar}/>
          <Route exact path='/SearchPage' component={SearchPage,Navbar}/>
          
        </div>
      </Router>
    );
  }
}

export default App;