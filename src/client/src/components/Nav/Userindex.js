import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn
}from './NavbarElements';

import userhome from '../../pages/User/userhome'
import Account from '../../pages/User/Account';
import UpdateUserInfo from '../../pages/User/UpdateUserInfo';
import UserReservedFlights from '../../pages/User/UserReservedFlights';
import UseravailableFlights from '../../pages/User/UseravailableFlights';
import UserSelectedFlights from '../../pages/User/UserSelectedFlights';
import UserFlightDetails from '../../pages/User/UserFlightDetails';


import {useLocation} from "react-router-dom";

const Userindex = props => {
    const pathname = useLocation().pathname;
    const id = pathname.split('/')[2]
    console.log(id)
    return(
        <>
            <Nav>
                <NavLink to={`/User/${id}`}>
                    <img src={Logo} 
                    width = '120' height = '120' alt='Logo'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to= {`/ReservedFlights/${id}`} activestyle>
                        Reserved Flights
                    </NavLink>
                    <NavLink to={`/Account/${id}`} activestyle>
                        Account
                    </NavLink>
                </NavMenu>
            </Nav>
            <Route exact path={`/User/${id}`} component={userhome} />
            <Route exact path={`/Account/${id}`} component={Account} />
            <Route exact path={`/UpdateUserInfo/${id}`} component={UpdateUserInfo} />
            <Route exact path={`/ReservedFlights/${id}`} component={UserReservedFlights}/>
            <Route exact path={`/UseravailableFlights/${id}`} component={UseravailableFlights}/>
            <Route exact path={`/UserSelectedFlights/${id}`} component={UserSelectedFlights}/>
            <Route exact path='/UserFlightDetails/:id' component={UserFlightDetails}/>
        </>
    );
};
export default Userindex;