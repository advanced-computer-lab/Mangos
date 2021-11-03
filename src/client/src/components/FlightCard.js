import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FlightCard = (props) => {
    const flight  = props.flight;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-flight/${flight._id}`}>
                        {flight.from}
                    </Link>
                </h2>
                <h3>{flight.FlightDate}</h3>
            </div>
        </div>
    )
};

export default FlightCard;