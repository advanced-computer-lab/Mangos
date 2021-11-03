import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import CreateUser from './components/CreateUser';
import CreateFlight from './components/CreateFlight';
import JsonDataDisplay from './components/ShowAllFlights';
import Home from './components/Home';
import admin from './components/Admin';
import Navbar  from './components/Nav/index'



class App extends Component {
  render() {
    return (
      
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SignUp' exact component={CreateUser} />
          <Route path='/ShowAllFlights' exact component={JsonDataDisplay} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;