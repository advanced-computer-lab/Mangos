import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "../App.css";
import Logo from '../images/Logo.svg';
import { Nav, NavLink } from '../components/Nav/NavbarElements';
import AuthService from "./services/auth.service";

const required = value => {
  if (!value) {
    return <div className="alert alert-danger" role="alert">This field is required!</div>;
  }
};

const email = value => {
  if (!isEmail(value)) {
    return <div className="alert alert-danger" role="alert">This is not a valid email.</div>;
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return <div className="alert alert-danger" role="alert">The username must be between 3 and 20 characters.</div>;
  }
};

const fname = value => {
  if (value.length < 3 || value.length > 20) {
    return <div className="alert alert-danger" role="alert">The firstname must be between 3 and 20 characters.</div>;
  }
};

const lname = value => {
  if (value.length < 3 || value.length > 20) {
    return <div className="alert alert-danger" role="alert">The lastname must be between 3 and 20 characters.</div>;
  }
};

const homeadd = value => {
  if (value.trim().length === 0) {
    return <div className="alert alert-danger" role="alert">The home address must be filled.</div>;
  }
};

const countrycod = value => {
  if (!/^\d+$/.test(value)) {
    return <div className="alert alert-danger" role="alert">The country code must contain digits only.</div>;
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return <div className="alert alert-danger" role="alert">The password must be between 6 and 40 characters.</div>;
  }
};

const phone = value => {
  if (!/^\d{11,}$/.test(value)) {
    return <div className="alert alert-danger" role="alert">The phone number must be at least 11 digits.</div>;
  }
};

const passport = value => {
  if (value.trim().length === 0) {
    return <div className="alert alert-danger" role="alert">The passport number must be filled.</div>;
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
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

  onChangeField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({ message: "", successful: false });
    this.form.validateAll();

    if (this.checkBtn.context && this.checkBtn.context._errors.length === 0) {
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
            message: error.response?.data || "Registration failed."
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
            <img src={Logo} width='120' height='120' alt='Logo' />
          </NavLink>
        </Nav>
        <div className="col-md-12">
          <div className="container">
            <Form onSubmit={this.handleRegister} ref={c => (this.form = c)}>
              {!this.state.successful && (
                <div>
                  <h1 className="display-4 text-center">Register</h1>
                  <div className="form-group">
                    <label>Username :</label>
                    <Input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChangeField} validations={[required, vusername]} autoComplete="off" />

                    <label>Password :</label>
                    <Input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChangeField} validations={[required, vpassword]} autoComplete="new-password" />

                    <label>First Name :</label>
                    <Input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.onChangeField} validations={[required, fname]} />

                    <label>Last Name :</label>
                    <Input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.onChangeField} validations={[required, lname]} />

                    <label>Home Address :</label>
                    <Input type="text" className="form-control" name="homeaddress" value={this.state.homeaddress} onChange={this.onChangeField} validations={[required, homeadd]} />

                    <label>Country Code :</label>
                    <Input type="text" className="form-control" name="countrycode" value={this.state.countrycode} onChange={this.onChangeField} validations={[required, countrycod]} />

                    <label>Phone Number :</label>
                    <Input type="text" className="form-control" name="phonenumber" value={this.state.phonenumber} onChange={this.onChangeField} validations={[required, phone]} />

                    <label>Email :</label>
                    <Input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChangeField} validations={[required, email]} />

                    <label>Passport Number :</label>
                    <Input type="text" className="form-control" name="passportnumber" value={this.state.passportnumber} onChange={this.onChangeField} validations={[required, passport]} />

                    <br />
                    <button className="btn btn-outline-info btn-lg btn-block">Sign Up</button>
                    <Link to="/Login" className="btn btn-outline-info btn-lg btn-block mt-2">Return to Login</Link>
                  </div>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
