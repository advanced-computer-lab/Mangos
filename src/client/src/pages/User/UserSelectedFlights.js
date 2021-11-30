import React, { Component} from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import UserCard from './UserSelectedCard';


class selectedflights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    const  {state}  = this.props.location
    axios
      .post('http://localhost:8000/api/FlightController/findids', state)
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
    const  {cabin}  = this.props.location
    const  {adults}  = this.props.location
    const  {children}  = this.props.location
    const flights = this.state.flights;
    let flightlist;

    if(!flights) {
        flightlist = "there is no flight record!";
    } else {
        flightlist = flights.map((flight, k) =>
        <UserCard flight={flight} cabin={cabin} adults={adults} children={children} key={k} />
      );
    }

    return (
      <div className="ShowFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Selected Flights</h2>
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

export default selectedflights;