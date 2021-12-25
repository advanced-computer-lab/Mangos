import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirm } from "react-confirm-box";
import '../../App.css';

const clicked = false;
class ReserveCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight : '',
      _id : '',
      flightid : '',
      userid : '61a67dd64525d0e4b4e1b6a9',
      cabin : '',
      adults : '',
      children : ''
    };
  }

  async onSubmit (data) {
    const result = await confirm("Are you sure?");
    if (result) {
      
      console.log(data)
      axios
        .get('http://localhost:8000/api/FlightController/'+data.flightid)
        .then(res => {
          axios
            .post('http://localhost:8000/api/FlightController/Change', [data , res.data])
            .then(res => {
              console.log("Updated")
            })
            .catch(err => {
              console.log("not Updated");
            })
        })
        .catch(err => {
          console.log("Error from Reserve Card");
        })
        
      axios
        .post('http://localhost:8000/api/ReservedController/Delete', data)
        .then(res => {
          console.log("Deleted")
          
        })
        .catch(err => {
          console.log("not Deleted");
        })
      alert("Your reservation has been canceled"+"\n"+"Refresh The page")
    }
    else{
      
    }
  };
  async onSubmit2 (data) {
    const result3 = await confirm("Are you sure?");
    if (result3) {
      axios
        .post('http://localhost:8000/api/userController/emailAgain',data)
        .then(res => {
          console.log("Emailed")
        })
        .catch(err => {
          console.log("not Updated");
        });
      }
  };
  

  render() {
    
    const flight = this.props.flight
    const data = {
      _id : this.props.flight._id,
      flightid : this.props.flight.flightid,
      userid : '61a67dd64525d0e4b4e1b6a9',
      from : this.props.flight.from,
      to : this.props.flight.to,
      departuretime : this.props.flight.departuretime,
      arrivaltime : this.props.flight.arrivaltime,
      cabin : this.props.flight.cabin,
      adults : this.props.flight.adults,
      children : this.props.flight.children
    }
    return (
    <div className="card-container2">
            <form noValidate className="desc">       
                <h3>From: {flight.from}</h3>
                <h3>To: {flight.to}</h3>
                <h3>Departure time: {flight.departuretime}</h3>
                <h3>Arrival time: {flight.arrivaltime}</h3>
                <h3>Price: {flight.price}</h3>
                <h3>Cabin: {flight.cabin}</h3>
                <h3>Adults: {flight.adults}</h3>
                <h3>Children: {flight.children}</h3>
                <h2>
                    <Link to={`/UserFlightDetails/${flight.flightid}`}>
                        Show details
                    </Link>
                </h2>
                <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onSubmit.bind(this,data)}  >
                  Cancel Reserve</button><br />
                  <button type="button" className="btn btn-outline-success btn-lg btn-block" onClick={this.onSubmit2.bind(this,data)}  >
                  Email Summary</button>
            </form>
        </div>);
  }

}
export default ReserveCard;