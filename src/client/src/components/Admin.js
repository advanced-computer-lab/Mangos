import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

import App  from './Nav/index'
import Navbar  from './Nav/index'
import CreateFlight from './CreateFlight';
import ShowFlightsList from './ShowFlightsList';
import SearchPage from './SearchPage';
import SearchFlight from './SearchFlight';

import ShowFlightDetails from './ShowFlightDetails';
import UpdateFlightInfo from './UpdateFlightInfo';

class admin extends Component {
    render() {
        return (
          <Router>
            <div>
                
                <Navbar/>
                <Route exact path='/show-flights' component={ShowFlightsList} />
                <Route exact path='/SearchFlight' component={SearchFlight} />
                <Route exact path='/create-flight' component={CreateFlight} />
                <Route exact path='/edit-flight/:id' component={UpdateFlightInfo} />
                <Route exact path='/show-flight/:id' component={ShowFlightDetails} />
                <Route exact path='/SearchPage' component={SearchPage} />
            </div>
          </Router>
        );
      }
}

export default admin;