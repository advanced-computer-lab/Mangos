import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateFlightInfo extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/FlightController/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          flightnumber: res.data.flightnumber,
          departuretime: res.data.departuretime,
          arrivaltime: res.data.arrivaltime,
          airport: res.data.airport,
          from: res.data.from,
          to: res.data.to,
          Economyseats: res.data.Economyseats,
          Businessseats: res.data.Businessseats,
          Firstclassseats: res.data.Firstclassseats
        })
      })
      .catch(err => {
        console.log("Error from UpdateFlightInfo");
      })
  };

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
      .put('http://localhost:8000/api/FlightController/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-flight/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateFlightInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateFlightInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/show-flights" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Flight</h1>
              <p className="lead text-center">
                  Update Flight's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Flightnumber">Flightnumber</label>
              <input
                type='text'
                placeholder='Flightnumber'
                name='flightnumber'
                className='form-control'
                value={this.state.flightnumber}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="Departuretime">Departuretime</label>
              <input
                type='datetime-local'
                placeholder='Departuretime'
                name='departuretime'
                className='form-control'
                value={this.state.departuretime}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="Arrivaltime">Arrivaltime</label>
              <input
                type='datetime-local'
                placeholder='Arrivaltime'
                name='arrivaltime'
                className='form-control'
                value={this.state.arrivaltime}
                onChange={this.onChange}
              />
            </div>
            <br />            
            <div className='form-group'>
              <label htmlFor="airport">Airport</label>
              <input
                type='text'
                placeholder='Airport'
                name='airport'
                className='form-control'
                value={this.state.airport}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor="from">From</label>
              <input
                type='text'
                placeholder='from'
                name='from'
                className='form-control'
                value={this.state.from}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="to">To</label>
              <input
                type='text'
                placeholder='to'
                name='to'
                className='form-control'
                value={this.state.to}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Economyseats">number of Economy seats</label>
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
            <label htmlFor="Businessseats">number of Business class seats</label>
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
            <label htmlFor="Firstclassseats">number of First class seats</label>
              <input
                type='text'
                placeholder='number of First class seats'
                name='Firstclassseats'
                className='form-control'
                value={this.state.Firstclassseats}
                onChange={this.onChange}
              />
            </div>
            

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Flight</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateFlightInfo;