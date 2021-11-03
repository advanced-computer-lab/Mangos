import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
        from: '',
        to:'',
        FlightDate:'',
        Cabin:'',
        seatsAvailable:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        from: this.state.from,
        to:this.state.to,
        FlightDate:this.state.FlightDate,
        Cabin:this.state.Cabin,
        seatsAvailable:this.state.seatsAvailable
    };

    axios
      .post('http://localhost:8000/api/FlightController', data)
      .then(res => {
        this.setState({
            from: '',
            to:'',
            FlightDate:'',
            Cabin:'',
            seatsAvailable:''
        })
        this.props.history.push('/');
        console.log("ez");
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
              <Link to="/" className="btn btn-outline-warning float-left">
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
                    placeholder='from'
                    name='from'
                    className='form-control'
                    value={this.state.Username}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='to'
                    name='to'
                    className='form-control'
                    value={this.state.Password}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='FlightDate'
                    name='FlightDate'
                    className='form-control'
                    value={this.state.FirstName}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Cabin'
                    name='Cabin'
                    className='form-control'
                    value={this.state.LastName}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='seatsAvailable'
                    name='seatsAvailable'
                    className='form-control'
                    value={this.state.HomeAddress}
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