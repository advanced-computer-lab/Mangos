import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlightCard from './FlightCard';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flights: []
    };
 
  
  }

  componentDidMount() {
    const  {state}  = this.props.location
      if(state.flightnumber==""){
        var flightnumber2;
      }
      else{
        flightnumber2=state.flightnumber
      }
      if(state.departuretime===""){
       var departuretime2;
      }
      else{
        departuretime2=state.departuretime
      }
      if(state.arrivaltime===""){
        var arrivaltime2;
       }
       else{
        arrivaltime2=state.arrivaltime
      }
       if(state.airport===""){
        var airport2;
       }
       else{
        airport2=state.airport
      }
       if(state.from===""){
        var from2;
       }
       else{
        from2=state.from
      }
       if(state.to===""){
        var to2;
       }
       else{
        to2=state.to
      }

    const data =  {  
      flightnumber : flightnumber2,
      departuretime : departuretime2,
      arrivaltime:  arrivaltime2,
      airport: airport2,
      from: from2,
      to: to2
    };
    console.log("this is data: ");
    console.log(data);
    console.log(data.flightnumber);
    axios
      .post('http://localhost:8000/api/FlightController/SearchFlight', data)
      .then(res => {
       //this.props.history.push('/SearchPage');
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from SearchPage');
      })
  };


  render() {
    //const { state } = this.props.location;
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

export default SearchPage;