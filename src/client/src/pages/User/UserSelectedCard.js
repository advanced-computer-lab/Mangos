import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirm } from "react-confirm-box";
import '../../App.css';


// Step 1

class UserSelectedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      axios
        .post('http://localhost:8000/api/FlightController/Update', data)
        .then(res => {
          console.log("Updated")
        })
        .catch(err => {
          console.log("not Updated");
        })
      axios
        .post('http://localhost:8000/api/ReservedController/', data)
        .then(res => {
          console.log("Added")
        })
        .catch(err => {
          console.log("not Added");
        })
      axios
        .post('http://localhost:8000/api/userController/emailAgain',data)
        .then(res => {
          console.log("emailed")
        })
        .catch(err => {
          console.log("error email");
        })
        alert("Your reservation has been Added, Please Pay")
        window.location.replace("/pay");
    }
  };
   onSubmit2 (data) {
    
   }
  

  render() {
    const flight = this.props.flight;
    const cabin = this.props.cabin;
    const adults = this.props.adults;
    const children = this.props.children;
    const data = {
      flightid : flight,
      userid : '61a67dd64525d0e4b4e1b6a9',
      from : flight.from,
      to : flight.to,
      departuretime : flight.departuretime,
      arrivaltime : flight.arrivaltime,
      price : flight.price,
      cabin : cabin,
      adults : adults,
      children : children
    }
    return (
    <div className="card-container2">
            <form noValidate className="desc">       
                <h3>From: {flight.from}</h3>
                <h3>To: {flight.to}</h3>
                <h3>Departure time: {flight.departuretime}</h3>
                <h3>Arrival time: {flight.arrivaltime}</h3>
                <h3>Price: {flight.price}</h3>
                <h3>Cabin: {cabin}</h3>
                <h3>Adults: {adults}</h3>
                <h3>Children: {children}</h3>
                <h2>
                    <Link to={`/UserFlightDetails/${flight._id}`}>
                        Show details
                    </Link>
                </h2>
                <button type="button" className="btn btn-outline-light btn-lg btn-block" onClick={this.onSubmit.bind(this,data)}>
                  Reserve flight</button><br />
            </form>
        </div>);
  }

}
export default UserSelectedCard;