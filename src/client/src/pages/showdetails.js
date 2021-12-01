import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { confirm } from "react-confirm-box";
import axios from 'axios';
import Logo from '../images/Logo.svg'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn
}from '../components/Nav/NavbarElements';

class FlightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {}
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/FlightController/'+this.props.match.params.id)
      .then(res => {
        this.setState({
            flight: res.data
        })
      })
      .catch(err => {
        console.log("Error from showFlightDetails");
      })
  };

  render() {

    const flight = this.state.flight;
    let flightItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Flight Number</td>
            <td>{ flight.flightnumber }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Departure time</td>
            <td>{ flight.departuretime }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Arrival time</td>
            <td>{ flight.arrivaltime }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Airport terminal</td>
            <td>{ flight.airportterminal }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>From</td>
            <td>{ flight.from }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>To</td>
            <td>{ flight.to }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Price</td>
            <td>{ flight.price }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Trip Duration</td>
            <td>{ flight.tripduration }</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Baggage Allowance</td>
            <td>{ flight.baggageallowance }</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Economy seats Available</td>
            <td>{ flight.Economyseats }</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Business seats Available</td>
            <td>{ flight.Businessseats }</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>First seats Available</td>
            <td>{ flight.Firstclassseats }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="showFlightDetails">
        <Nav>
            <NavLink to="/">
                <img src={Logo} 
                width = '120' height = '120' alt='Logo'/>
            </NavLink>
            <Bars />
        </Nav>
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Flight's Record</h1>
              <p className="lead text-center">
                  View Flight's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { flightItem }
          </div>

        </div>
      </div>
    );
  }
}

export default FlightDetails;