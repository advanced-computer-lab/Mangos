import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const CabinOptions = ["Economy Class", "Business Class", "First Class"];
const AdultOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ChildOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

class HomeNavbar extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
      departure: '',
      arrival: '',
      Cabin: 'Economy Class',
      Adults: '1',
      Children: '0',
      dateError: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const { departure, arrival } = this.state;
      if (departure && arrival) {
        const dep = new Date(departure);
        const arr = new Date(arrival);
        if (dep >= arr) {
          this.setState({ dateError: "Departure must be before arrival" });
        } else {
          this.setState({ dateError: "" });
        }
      }
    });
  };

  render() {
    const { from, to, departure, arrival, Cabin, Adults, Children, dateError } = this.state;

    return (
      <div className='HomePage'>
        <Nav>
          <NavLink to="/">
            <img src={Logo} width='120' height='120' alt='Logo' />
          </NavLink>
          <Bars />
          <NavBtn>
            <NavBtnLink to='/Login'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>

        <div className="SearchFlight">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <h1 className="display-4 text-center">Search Flights</h1>
                <p className="lead text-center"><b>Round trip</b></p>

                <form noValidate>
                  <h3>Where and When</h3>

                  <div>From:</div>
                  <input
                    type="text"
                    name="from"
                    className="form-control"
                    placeholder="From"
                    value={from}
                    onChange={this.handleChange}
                  />

                  <div>To:</div>
                  <input
                    type="text"
                    name="to"
                    className="form-control"
                    placeholder="To"
                    value={to}
                    onChange={this.handleChange}
                  />

                  <div>Departure Time:</div>
                  <input
                    type="date"
                    name="departure"
                    className="form-control"
                    value={departure}
                    onChange={this.handleChange}
                  />

                  <div>Arrival Time:</div>
                  <input
                    type="date"
                    name="arrival"
                    className="form-control"
                    value={arrival}
                    onChange={this.handleChange}
                  />

                  {dateError && (
                    <div style={{ color: 'red', marginTop: '5px' }}>
                      {dateError}
                    </div>
                  )}

                  <div>Cabin:</div>
                  <select
                    name="Cabin"
                    className="form-control"
                    value={Cabin}
                    onChange={this.handleChange}
                  >
                    {CabinOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <hr />
                  <h3>Passengers</h3>

                  <div>Adults:</div>
                  <select
                    name="Adults"
                    className="form-control"
                    value={Adults}
                    onChange={this.handleChange}
                  >
                    {AdultOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <div>Children:</div>
                  <select
                    name="Children"
                    className="form-control"
                    value={Children}
                    onChange={this.handleChange}
                  >
                    {ChildOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <br /><br />
                  <Link
                    to={{
                      pathname: '/availableFlights',
                      state: this.state
                    }}
                    className={`btn btn-outline-info btn-lg btn-block ${dateError ? 'disabled' : ''}`}
                    onClick={(e) => {
                      if (dateError) e.preventDefault();
                    }}
                  >
                    Search
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeNavbar;
