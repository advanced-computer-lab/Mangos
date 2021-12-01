import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../../App.css';

import HomeNavbar  from '../../components/Nav/Homeindex'

class homepage extends Component {
    render() {
        return (
          <Router>
                <h1>home</h1>
          </Router>
        );
      }
}
export default homepage;