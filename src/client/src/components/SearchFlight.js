import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import FlightCard from './FlightCard';


class SearchFlight extends Component {
  constructor() {
    super();
    this.state = {
        flightnumber: '',
        departuretime: '',
        arrivaltime: '',
        airport: '',
        from: '',
        to:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    
    //  const data = [{flightnumber: this.state.flightnumber},
    //      {departuretime: this.state.departuretime},
    //      {arrivaltime: this.state.arrivaltime},
    //      {airport: this.state.airport},
    //      {from: this.state.from},
    //      {to:this.state.to}];
    
    const data = this.state;
    

    // axios
    //   .post('http://localhost:8000/api/FlightController/SearchFlight', data)
    //   .then(res => {
    //     this.setState({
    //         flightnumber: '',
    //         departuretime: '',
    //         arrivaltime: '',
    //         airport: '',
    //         from: '',
    //         to:''
    //       })
    //     this.props.history.push('/SearchPage');
    //   })
    //   .catch(err => {
    //     console.log("Error in SearchFlight!");
    //   })
  };

  render() {
    const data = this.state;
    // const flights = this.state.flights;
    // console.log("PrintFlights: " + flights);
    // let flightlist;

    // if(!flights) {
    //     flightlist = "there is no flight record!";
    // } else {
    //     flightlist = flights.map((flight, k) =>
    //     <FlightCard flight={flight} key={k} />
    //   );
    // }
    return (
      <div className="SearchFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/show-flights" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Flight</h1>
              <p className="lead text-center">
                <b>Add a new flight</b>
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div>Flight Number: </div>
              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Flightnumber'
                    name='flightnumber'
                    className='form-control'
                    value={this.state.flightnumber}
                    onChange={this.onChange}
                  />
                </div>
                <div>Departure Time: </div>
                <div className='form-group'>
                  <input
                    type='datetime-local'
                    placeholder='Departuretime'
                    name='departuretime'
                    className='form-control'
                    value={this.state.departuretime}
                    onChange={this.onChange}
                  />
                </div>
                <div>Arrival Time: </div>
                <div className='form-group'>
                  <input
                    type='datetime-local'
                    placeholder='Arrivaltime'
                    name='arrivaltime'
                    className='form-control'
                    value={this.state.arrivaltime}
                    onChange={this.onChange}
                  />
                </div>
                <div>Airport: </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Airport'
                    name='airport'
                    className='form-control'
                    value={this.state.airport}
                    onChange={this.onChange}
                  />
                </div>
                <div>From: </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='From'
                    name='from'
                    className='form-control'
                    value={this.state.from}
                    onChange={this.onChange}
                  />
                </div>
                <div>To: </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='To'
                    name='to'
                    className='form-control'
                    value={this.state.to}
                    onChange={this.onChange}
                  />
                </div>
                <Link to={{pathname:`/SearchPage/`, state: data}}  className="btn btn-outline-info btn-lg btn-block">
                    Search Flight
              </Link>
                
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFlight;