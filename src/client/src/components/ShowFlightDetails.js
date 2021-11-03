import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowFlightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8000/api/FlightController/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
            flight: res.data
        })
      })
      .catch(err => {
        console.log("Error from showFlightDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8000/api/FlightController/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form showFlightDetails_deleteClick");
      })
  };


  render() {

    const flight = this.state.flight;
    let flightItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>From</td>
            <td>{ flight.from }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>To</td>
            <td>{ flight.to }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Flight Date</td>
            <td>{ flight.FlightDate }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Cabin</td>
            <td>{ flight.Cabin }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>seats Available</td>
            <td>{ flight.seatsAvailable }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="showFlightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Flight's Record</h1>
              <p className="lead text-center">
                  View Flight's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { flightItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,flight._id)}>
                  Delete flight</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-flight/${flight._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit flight
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default ShowFlightDetails;