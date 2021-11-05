import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
        flightnumber: '',
        departuretime: '',
        arrivaltime: '',
        airport: '',
        from: '',
        to:'',
        //FlightDate:'',
        Economyseats:'',
        Businessseats:'',
        Firstclassseats:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        flightnumber: this.state.flightnumber,
        departuretime: this.state.departuretime,
        arrivaltime: this.state.arrivaltime,
        airport: this.state.airport,
        from: this.state.from,
        to:this.state.to,
        //FlightDate:this.state.FlightDate,
        Economyseats:this.state.Economyseats,
        Businessseats:this.state.Businessseats,
        Firstclassseats:this.state.Firstclassseats
    };

    axios
      .post('http://localhost:8000/api/FlightController', data)
      .then(res => {
        this.setState({
            flightnumber: '',
            departuretime: '',
            arrivaltime: '',
            airport: '',
            from: '',
            to:'',
            //FlightDate:'',
            Economyseats:'',
            Businessseats:'',
            Firstclassseats:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateFlight!");
      })
  };

  render() {
    return (
      <div className="CreateFlight">
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

                <div className='form-group'>
                  <input
                    type='Date'
                    placeholder='Departuretime'
                    name='departuretime'
                    className='form-control'
                    value={this.state.departuretime}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='Date'
                    placeholder='Arrivaltime'
                    name='arrivaltime'
                    className='form-control'
                    value={this.state.arrivaltime}
                    onChange={this.onChange}
                  />
                </div>

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

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='number of Economy seats'
                    name='Economyseats'
                    className='form-control'
                    value={this.state.Economyseats}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='number of Business class seats'
                    name='Businessseats'
                    className='form-control'
                    value={this.state.Businessseats}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='number of First class seats'
                    name='Firstclassseats'
                    className='form-control'
                    value={this.state.Firstclassseats}
                    onChange={this.onChange}
                  />
                </div>
                <input
                    value ="Add"
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFlight;