import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightsList from './components/ShowFlightsList';

import ShowFlightDetails from './components/ShowFlightDetails';
import UpdateFlightInfo from './components/UpdateFlightInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowFlightsList} />
          <Route path='/create-flight' component={CreateFlight} />
          <Route path='/edit-flight/:id' component={UpdateFlightInfo} />
          <Route path='/show-flight/:id' component={ShowFlightDetails} />
        </div>
      </Router>
    );
  }
}

export default App;