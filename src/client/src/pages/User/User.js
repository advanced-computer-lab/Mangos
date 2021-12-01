import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../App.css';

import UserNavbar  from '../../components/Nav/Userindex'
import availableflights from '../../pages/availableFlights'

const User = () => {
    return(
        <>
            <Router>
                <UserNavbar/>
            </Router> 
        </>
    );
};
export default User;