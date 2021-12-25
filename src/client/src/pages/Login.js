import axios from "axios";
import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.svg';
import {
  Nav,
  NavLink
}from '../components/Nav/NavbarElements';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    if (!e.target.username.value) {
      alert("Username is required");
    } else if (!e.target.username.value) {
      alert("Valid Username is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } 
    else {
      const username = e.target.username.value;
      const password = e.target.password.value;
      const data = {username,password}
      axios
      .post('http://localhost:8000/api/authRoutes/login',data)
      .then(res => {
        if(res.data == "incorrect username and/or password"){
          this.setState({
            message: "incorrect username and/or password",
          });
        }
        else{
          if(res.data.user.isAdmin){
            window.location.replace("/Admin/"+res.data.user._id);
          }
          if(!res.data.user.isAdmin){
            window.location.replace("/User/"+res.data.user._id);
          }
        }
      })
      .catch(err => {
        console.log("Error from login");
      })
      
      e.target.username.value = "";
      e.target.password.value = "";
    } 
  };

  handleClick = e => {
    e.preventDefault();

    window.location.replace("/Register");
  };

  render() {
    return (
      <div className="Login">
        <Nav>
          <NavLink to="/">
            <img src={Logo}  width = '120' height = '120' alt='Logo'/>
          </NavLink>
        </Nav>
        
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <br />
              <h1 className="display-4 text-center">Login</h1>
              <br/>
              <form className="login" onSubmit={this.handleSubmit}>
                <div className="input-group">
                <h4 htmlFor="username" >Username:</h4>
                <input type="username" name="username" required/>
                </div>
                <br/>
                <div className="input-group">
                <h4 htmlFor="password" >Password :</h4>
                <input type="password" name="password" required />
                </div>
                {this.state.message && (
                <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
                <br/>
                  <button className="btn btn-outline-info btn-lg btn-block" >Login</button>           
              </form>
              <br/>
              <button className="btn btn-outline-info btn-lg btn-block" onClick={this.handleClick}>
                Register
              </button>
                    
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
