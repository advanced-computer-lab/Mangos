import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateFlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        from: '',
        to:'',
        FlightDate:'',
        Cabin:'',
        seatsAvailable:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/api/FlightController/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
            from: res.data.from,
            to: res.data.to,
            FlightDate: res.data.FlightDate,
            Cabin: res.data.Cabin,
            seatsAvailable: res.data.seatsAvailable
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
        from: this.state.from,
        to: this.state.to,
        FlightDate: this.state.FlightDate,
        Cabin: this.state.Cabin,
        seatsAvailable: this.state.seatsAvailable
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
              <Link to="/" className="btn btn-outline-warning float-left">
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
              <label htmlFor="title">From</label>
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
            <label htmlFor="isbn">To</label>
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
            <label htmlFor="author">Flight Date</label>
              <input
                type='text'
                placeholder='FlightDate'
                name='FlightDate'
                className='form-control'
                value={this.state.FlightDate}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Cabin</label>
              <input
                type='text'
                placeholder='Cabin'
                name='Cabin'
                className='form-control'
                value={this.state.Cabin}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">seats Available</label>
              <input
                type='text'
                placeholder='seatsAvailable'
                name='seatsAvailable'
                className='form-control'
                value={this.state.seatsAvailable}
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