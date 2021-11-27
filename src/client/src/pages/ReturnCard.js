import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReturnCard = (props) => {

    const flight = props.flight;
    
    return(
        <div className="card-container2">
            <div className="desc">       
                <h3>From: {flight.from}</h3>
                <h3>To: {flight.to}</h3>
                <h3>Departure time: {flight.departuretime}</h3>
                <h3>Arrival time: {flight.arrivaltime}</h3>
                <h2>
                    <Link to={`/flightdetails/${flight._id}`}>
                        Show details
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default ReturnCard;