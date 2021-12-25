import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "../App.css";
import Logo from '../images/Logo.svg';
import {
  Nav,
  NavLink
}from '../components/Nav/NavbarElements';

import AuthService from "./services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const fname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The firstname must be between 3 and 20 characters.
      </div>
    );
  }
};
const lname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The lastname must be between 3 and 20 characters.
      </div>
    );
  }
};
const homeadd = value => {
  if (value.length == 0) {
    return (
      <div className="alert alert-danger" role="alert">
        The homeaddress must be filled.
      </div>
    );
  }
};
const countrycod = value => {
  if (value.length == 0) {
    return (
      <div className="alert alert-danger" role="alert">
        The countrycode must be filled.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const phone = value => {
  if (value.length < 11) {
    return (
      <div className="alert alert-danger" role="alert">
        The phonenumber must be 11 numbers or more.
      </div>
    );
  }
};

const passport = value => {
  if (value.length == 0) {
    return (
      <div className="alert alert-danger" role="alert">
        The passportnumber must be filled.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeHomeAdd = this.onChangeHomeAdd.bind(this);
    this.onChangePhoneNum = this.onChangePhoneNum.bind(this);
    this.onChangeCountryCode = this.onChangeCountryCode.bind(this);
    this.onChangePassportNum = this.onChangePassportNum.bind(this);

    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      homeaddress: "",
      countrycode: "",
      phonenumber: "",
      email: "",
      passportnumber: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeFname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLname(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeHomeAdd(e) {
    this.setState({
      homeaddress: e.target.value
    });
  }
  onChangePhoneNum(e) {
    this.setState({
      phonenumber: e.target.value
    });
  }
  onChangePassportNum(e) {
    this.setState({
      passportnumber: e.target.value
    });
  }
  onChangeCountryCode(e) {
    this.setState({
      countrycode: e.target.value
    });
  }


  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.password,
        this.state.firstname,
        this.state.lastname,
        this.state.homeaddress,
        this.state.countrycode,
        this.state.phonenumber,
        this.state.email,
        this.state.passportnumber 
      ).then(
        res => {
          window.location.replace("/Login");
        },
        error => {
          this.setState({
            successful: false,
            message: error.response.data
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="Register">
        <Nav>
          <NavLink to="/">
            <img src={Logo}  width = '120' height = '120' alt='Logo'/>
          </NavLink>
        </Nav>
      <div className="col-md-12">
        <div className="container">
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <h1 className="display-4 text-center">Register</h1>
                <br/>
                <br/>
                <br/>
                <div className="row">
                  <label htmlFor="username">Username :</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                  <label htmlFor="password">Password :</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <br/>
                <div className="row">
                    <label htmlFor="firstname">FirstName :</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.onChangeFname}
                      validations={[required, fname]}
                    />
                    <label htmlFor="lastname">LastName :</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.onChangeLname}
                      validations={[required, lname]}
                    />
                </div>
                <br/>
                <div className="row">
                  <label htmlFor="homeaddress">HomeAddress :</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="homeaddress"
                    value={this.state.homeaddress}
                    onChange={this.onChangeHomeAdd}
                    validations={[required, homeadd]}
                  />
                  <label htmlFor="countrycode">CountryCode :</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="countrycode"
                    value={this.state.countrycode}
                    onChange={this.onChangeCountryCode}
                    validations={[required, countrycod]}
                  />
                </div>
                <br/>
                <div className="row">
                  <label htmlFor="phonenumber">PhoneNumber :</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phonenumber"
                    value={this.state.phonenumber}
                    onChange={this.onChangePhoneNum}
                    validations={[required, phone]}
                  />
                </div>
                <br/>
                <div className="row">
                  <label htmlFor="email">Email :</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>
                <br/>
                <div className="row" >
                  <label htmlFor="passportnumber">PassportNumber :</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="passportnumber"
                    value={this.state.passportnumber}
                    onChange={this.onChangePassportNum}
                    validations={[required, passport]}
                  />
                </div>
                <br/>
                <div className="Register-group">
                  <button className="btn btn-outline-info btn-lg btn-block">Sign Up</button>
                </div>
                <div className="group">
                  <Link to={`/Login`} className="btn btn-outline-info btn-lg btn-block">
                    Return to Login
                  </Link>
               </div>
              </div>
            )}

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
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      </div>
    );
  }
}
