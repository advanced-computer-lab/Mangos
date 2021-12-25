import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      FirstName: '',
      LastName:'',
      HomeAddress:'',
      CountryCode:'',
      PhoneNumber: [],
      Email: '',
      PassportNumber:''
    };
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const id = pathname.split('/')[2];
    axios
      .get('http://localhost:8000/api/userController/'+id)
      .then(res => {
        this.setState({
          Username: res.data.Username,
          Password: res.data.Password,
          FirstName: res.data.FirstName,
          LastName: res.data.LastName,
          HomeAddress: res.data.HomeAddress,
          CountryCode: res.data.CountryCode,
          PhoneNumber: res.data.PhoneNumber,
          Email: res.data.Email,
          PassportNumber: res.data.PassportNumber
        })
      })
      .catch(err => {
        console.log("Error from UpdateUserInfo");
      })
  };

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
    const pathname = this.props.location.pathname;
    const id = pathname.split('/')[2];
    axios
      .put('http://localhost:8000/api/userController/'+id, data)
      .then(res => {
        this.props.history.push('/Account');
      })
      .catch(err => {
        console.log("Error in UpdateUserInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateUserInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Update User's Info</h1>
            </div>
          </div>
          <div className="col-md-8 m-auto">
          <form Validate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Username">Username</label>
              <input
                required
                type='text'
                placeholder='Username'
                name='Username'
                className='form-control'
                value={this.state.Username}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="FirstName">FirstName</label>
              <input
                required
                type='text'
                placeholder='FirstName'
                name='FirstName'
                className='form-control'
                value={this.state.FirstName}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="LastName">LastName</label>
              <input
                required
                type='text'
                placeholder='LastName'
                name='LastName'
                className='form-control'
                value={this.state.LastName}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="HomeAddress">HomeAddress</label>
              <input
                required
                type='text'
                placeholder='HomeAddress'
                name='HomeAddress'
                className='form-control'
                value={this.state.HomeAddress}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="CountryCode">CountryCode</label>
              <input
                required
                type='text'
                placeholder='CountryCode'
                name='CountryCode'
                className='form-control'
                value={this.state.CountryCode}
                onChange={this.onChange}
              />
            </div>
            <br />            
            <div className='form-group'>
              <label htmlFor="PhoneNumber">PhoneNumber</label>
              <input
                required
                type='text'
                placeholder='PhoneNumber'
                name='PhoneNumber'
                className='form-control'
                value={this.state.PhoneNumber}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="Email">Email</label>
              <input
                required
                type='text'
                placeholder='Email'
                name='Email'
                className='form-control'
                value={this.state.Email}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
            <label htmlFor="PassportNumber">Passport Number</label>
              <input
                required
                type='text'
                placeholder='PassportNumber'
                name='PassportNumber'
                className='form-control'
                value={this.state.PassportNumber}
                onChange={this.onChange}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update User</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateUserInfo;