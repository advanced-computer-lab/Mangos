import axios from "axios";
import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Logo from '../images/Logo.svg';
import {
  Nav,
  NavLink
} from '../components/Nav/NavbarElements';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      successful: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    if (!username) {
      this.setState({ message: "Username is required", successful: false });
      return;
    }

    if (!password) {
      this.setState({ message: "Password is required", successful: false });
      return;
    }

    const data = { username, password };

    axios
      .post('http://localhost:8000/api/authRoutes/login', data)
      .then(res => {
        if (res.data === "incorrect username and/or password") {
          this.setState({
            message: "Incorrect username and/or password",
            successful: false
          });
        } else {
          const user = res.data.user;
          if (user?.isAdmin) {
            window.location.replace(`/Admin/${user._id}`);
          } else {
            window.location.replace(`/User/${user._id}`);
          }
        }
      })
      .catch(err => {
        console.error("Error during login", err);
        this.setState({
          message: "An error occurred during login.",
          successful: false
        });
      });

    // Clear form fields
    e.target.reset();
  };

  handleRegisterRedirect = () => {
    window.location.replace("/Register");
  };

  render() {
    return (
      <div className="Login">
        <Nav>
          <NavLink to="/">
            <img src={Logo} width="120" height="120" alt="Logo" />
          </NavLink>
        </Nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <br />
              <h1 className="display-4 text-center">Login</h1>
              <br />
              <form className="login" onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <h4 htmlFor="username">Username:</h4>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    required
                  />
                </div>
                <br />
                <div className="input-group">
                  <h4 htmlFor="password">Password:</h4>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                  />
                </div>
                <br />
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
                <button className="btn btn-outline-info btn-lg btn-block">
                  Login
                </button>
              </form>
              <br />
              <button
                className="btn btn-outline-info btn-lg btn-block"
                onClick={this.handleRegisterRedirect}
              >
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
