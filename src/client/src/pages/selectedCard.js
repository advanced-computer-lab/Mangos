import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SelectedCard = (props) => {

    const flight = props.flight;
    const cabin = props.cabin;
    const adults = props.adults;
    const children = props.children;
    
    return(
        <div className="card-container2">
            <div className="desc">       
                <h3>From: {flight.from}</h3>
                <h3>To: {flight.to}</h3>
                <h3>Departure time: {flight.departuretime}</h3>
                <h3>Arrival time: {flight.arrivaltime}</h3>
                <h3>Price: {flight.price}</h3>
                <h3>Cabin: {cabin}</h3>
                <h3>Adults: {adults}</h3>
                <h3>Children: {children}</h3>
                <h2>
                    <Link to={`/flightdetails/${flight._id}`}>
                        Show details
                    </Link>
                </h2>
            </div>
        </div>
    )
};

export default SelectedCard;