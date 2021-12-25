import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { confirm } from "react-confirm-box";
import axios from 'axios';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  
  componentDidMount() {
    const pathname = this.props.location.pathname;
    const id = pathname.split('/')[2];
    axios
      .get('http://localhost:8000/api/userController/'+id)
      .then(res => {
        this.setState({
            user: res.data
        })
      })
      .catch(err => {
        console.log("Error from Account");
      })
  };

  render() {
    const pathname = this.props.location.pathname;
    const id = pathname.split('/')[2];
    const user = this.state.user;
    let userItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Username</td>
            <td>{ user.Username }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Password</td>
            <td>{ user.Password }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>FirstName</td>
            <td>{ user.FirstName }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>LastName</td>
            <td>{ user.LastName }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>HomeAddress</td>
            <td>{ user.HomeAddress }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>CountryCode</td>
            <td>{ user.CountryCode }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>PhoneNumber(s)</td>
            <td>{ user.PhoneNumber + " " }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Email</td>
            <td>{ user.Email }</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Passport Number</td>
            <td>{ user.PassportNumber }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="showFlightDetails">
        <div className="container">
          <div className="row">
            
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User's Info</h1>
              <hr /> <br />
            </div>
          </div>
          <div>
            { userItem }
          </div>

          <div className="row">
            <div className="col-md-6 m-auto">
              <Link to={`/UpdateUserInfo/${id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit my profile
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Account;