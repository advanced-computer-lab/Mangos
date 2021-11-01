import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateUser from './components/CreateUser';
import CreateFlight from './components/CreateFlight';
import Home from './components/Home';
import admin from './components/Admin';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route path='/SignUp' component={CreateUser} />
          <Route path='/AddFlight' component={CreateFlight} />
          <Route path='/admin' component={admin} />
          <Route path='/' component={Home} />
         
          
        </div>
      </Router>
    );
  }
}

export default App;