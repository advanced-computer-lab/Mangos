import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import admin from './pages/Admin';
import Homepage from './pages/HomePages/Homepage';
import Login from './pages/SignIn';

import Navbar  from './components/Nav/index'
import HomeNavbar  from './components/Nav/Homeindex'

import CreateFlight from './pages/CreateFlight';
import ShowFlightsList from './pages/ShowFlightsList';
import SearchPage from './pages/SearchPage';
import availableflights from './pages/availableFlights';
import SearchFlight from './pages/SearchFlight';
import ShowFlightDetails from './pages/ShowFlightDetails';
import UpdateFlightInfo from './pages/UpdateFlightInfo';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage,HomeNavbar} />
          <Route exact path='/availableFlights' component={availableflights}/>
          <Route exact path='/SignIn' component={Login} />
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