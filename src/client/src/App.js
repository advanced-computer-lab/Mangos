import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateUser from './components/CreateUser';
import CreateFlight from './components/CreateFlight';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/SignUp' component={CreateUser} />
          <Route path='/CreateFlight' component={CreateFlight} />
          
        </div>
      </Router>
    );
  }
}

export default App;