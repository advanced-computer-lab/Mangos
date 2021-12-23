import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";

class Login extends Component {
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
      .post('http://localhost:8000/api/userController/login',data)
      .then(res => {
        if(res.data.isAdmin){
          window.location.replace("/Admin");
        }
        else{
          window.location.replace("/User");
        }
        alert("Successfully logged in");
      })
      .catch(err => {
        alert("incorrect username and/or password");
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
                <br/>
                  <button className="loginbutton" >Login</button>           
              </form>
              <br/>
              <button className="register" onClick={this.handleClick}>
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
