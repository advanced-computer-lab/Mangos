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
    const pathname = this.props.location.pathname;
    const id = pathname.split('/')[2];
    axios
      .get('http://localhost:8000/api/ReservedController/'+id)
      .then(res => {
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from UserReservedFlights');
      })
  };


  render() {
    
    const flights = this.state.flights;
    console.log(flights)
    let flightlist;
    let totalprice;
    let ticketprice = 0 ;
    var hidden = 'visible';

    if(!flights) {
        flightlist = "there is no flight record!";
    } else {
        flightlist = flights.map((flight, k) =>
        <Card flight={flight} key={k} />);
        totalprice = flights.map((flight, k) => ticketprice += parseInt(flight.price) );
    }
    if(ticketprice != 0){
      hidden = 'visible'
    }
    else{
      hidden = 'hidden'
    }
    console.log(ticketprice)
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
          <div className="list">
            <h3 style={{visibility: hidden}}>the total price of the entire ticket {ticketprice}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserReservedFlights;