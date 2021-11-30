import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './ReserveCard';

class UserReservedFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/ReservedController/')
      .then(res => {
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowFlightsList');
      })
  };


  render() {
    const flights = this.state.flights;
    let flightlist;

    if(!flights) {
        flightlist = "there is no flight record!";
    } else {
        flightlist = flights.map((flight, k) =>
        <Card flight={flight} key={k} />
      );
    }

    return (
      <div className="ShowFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Reserved Flights</h2>
            </div>

          </div>

          <div className="list">
                {flightlist}
          </div>
        </div>
      </div>
    );
  }
}

export default UserReservedFlights;