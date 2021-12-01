import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../../App.css';

import Navbar  from '../../components/Nav/index'

class admin extends Component {
    render() {
        return (
          <Router>
                <Navbar/>
          </Router>
        );
      }
}
export default admin;
