import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlightCard from '../FlightCard';

class ShowFlightsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/FlightController')
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
    console.log("PrintFlights: " + flights);
    let flightlist;

    if(!flights) {
        flightlist = "there is no flight record!";
    } else {
        flightlist = flights.map((flight, k) =>
        <FlightCard flight={flight} key={k} />
      );
    }

    return (
      <div className="ShowFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Flights List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-flight" className="btn btn-outline-warning float-right">
                + Add New flight
              </Link>
              <br />
              <br />
              <hr />
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

export default ShowFlightsList;