import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FlightCard = (props) => {
    const flight  = props.flight;
    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-flight/${flight._id}`}>
                        Edit/Delete
                    </Link>
                </h2>
                <h3>Flight Number: {flight.flightnumber}</h3>
                <h3>Departure time: {flight.departuretime}</h3>
                <h3>Arrival time: {flight.arrivaltime}</h3>
                <h3>From: {flight.from}</h3>
                <h3>To: {flight.to}</h3>
                <h3>Airport Terminal: {flight.airportterminal}</h3>
                <h3>Price: {flight.price}</h3>
                <h3>Trip Duration: {flight.tripduration}</h3>
                <h3>Baggage Allowance: {flight.baggageallowance}</h3>
                <h3>Economy seats Available :{flight.Economyseats}</h3>
                <h3>Business seats Available :{flight.Businessseats}</h3>
                <h3>First seats Available :{flight.Firstclassseats}</h3>
            </div>
        </div>
    )
};

export default FlightCard;