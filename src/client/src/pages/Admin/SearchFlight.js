import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import FlightCard from '../FlightCard';


class SearchFlight extends Component {
  constructor() {
    super();
    this.state = {
        flightnumber: '',
        departuretime: '',
        arrivaltime: '',
        airportterminal: '',
        from: '',
        to:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = this.state;
  };

  render() {
    const data = this.state;
    const pathname = this.props.location.pathname;
    const id = pathname.split('/')[2]
    console.log(id)
    return (
      <div className="SearchFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">Search Flight</h1>
            <p className="lead text-center">
              <b>Search for a flight</b>
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
                <div>Airport terminal: </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='airportterminal'
                    name='airportterminal'
                    className='form-control'
                    value={this.state.airportterminal}
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

                <Link to={{pathname:`/SearchPage/${id}`, state: data}}  className="btn btn-outline-info btn-lg btn-block">
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