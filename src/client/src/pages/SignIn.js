import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


const Login = () => {
    return (
        <div className="Login">
          <div className="container">
            <div className="col-md-11">
            
              <Link to='/Admin' className="btn btn-outline-warning float-right">
                Sign as Administrator
              </Link>
              <br />
              <br />
              <Link to='/User' className="btn btn-outline-warning float-right">
                Sign as User
              </Link>
            </div>

            </div>
      </div>
    )
    
}

export default Login;