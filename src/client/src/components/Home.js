import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

import admin from './Admin';

<Route path="/Admin" component={admin} /> 

const Home = () => {
    return (
        <div className="ShowFlightList">
        <div className="container">
        <div className="col-md-11">
            
              <Link to='/Admin' className="btn btn-outline-warning float-right">
                Sign as Administrator
              </Link>
              <br />
              <br />
              <hr />
              <Link to='/SignIn' className="btn btn-outline-warning float-right">
                Sign In
              </Link>
            </div>

            </div>
            </div>
    )
    
}

export default Home;