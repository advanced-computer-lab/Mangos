import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
        Username: '',
        Password:'',
        FirstName:'',
        LastName:'',
        HomeAddress:'',
        CountryCode:'',
        PhoneNumber:'',
        Email:'',
        PassportNumber:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        Username: this.state.Username,
        Password: this.state.Password,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        HomeAddress: this.state.HomeAddress,
        CountryCode: this.state.CountryCode,
        PhoneNumber: this.state.PhoneNumber,
        Email: this.state.Email,
        PassportNumber: this.state.PassportNumber
    };

    axios
      .post('http://localhost:8000/SignUp', data)
      .then(res => {
        this.setState({
            Username: '',
            Password:'',
            FirstName:'',
            LastName:'',
            HomeAddress:'',
            CountryCode:'',
            PhoneNumber:'',
            Email:'',
            PassportNumber:''
        })
        this.props.history.push('/');
        console.log("ez");
      })
      .catch(err => {
        console.log("Error in CreateUser!");
      })
  };

  render() {
    return (
      <div className="CreateUser">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                <b>Create new User</b>
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Username'
                    name='Username'
                    className='form-control'
                    value={this.state.Username}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Password'
                    name='Password'
                    className='form-control'
                    value={this.state.Password}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='FirstName'
                    name='FirstName'
                    className='form-control'
                    value={this.state.FirstName}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='LastName'
                    name='LastName'
                    className='form-control'
                    value={this.state.LastName}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='HomeAddress'
                    name='HomeAddress'
                    className='form-control'
                    value={this.state.HomeAddress}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='CountryCode'
                    name='CountryCode'
                    className='form-control'
                    value={this.state.CountryCode}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='PhoneNumber'
                    name='PhoneNumber'
                    className='form-control'
                    value={this.state.PhoneNumber}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input                 
                    type='email'
                    placeholder='Email'
                    name='Email'
                    className='form-control'
                    value={this.state.Email}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='PassportNumber'
                    name='PassportNumber'
                    className='form-control'
                    value={this.state.PassportNumber}
                    onChange={this.onChange}
                  />
                </div>
                <input
                    value ="SignUp"
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;