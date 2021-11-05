import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import admin from './components/Admin';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/Admin' component={admin} />
          
        </div>
      </Router>
    );
  }
}

export default App;