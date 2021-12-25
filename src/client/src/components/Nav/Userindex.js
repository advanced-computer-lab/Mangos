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

const Userindex = () => {
    return(
        <>
            <Nav>
                <NavLink to="/User">
                    <img src={Logo} 
                    width = '120' height = '120' alt='Logo'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to= "/ReservedFlights/:id" activestyle>
                        Reserved Flights
                    </NavLink>
                    <NavLink to="/Account" activestyle>
                        Account
                    </NavLink>
                </NavMenu>
            </Nav>

            <Route exact path='/User' component={userhome} />
            <Route exact path='/Account' component={Account} />
            <Route exact path='/UpdateUserInfo' component={UpdateUserInfo} />
            <Route exact path='/ReservedFlights' component={UserReservedFlights}/>
            <Route exact path='/UseravailableFlights' component={UseravailableFlights}/>
            <Route exact path='/UserSelectedFlights' component={UserSelectedFlights}/>
            <Route exact path='/UserFlightDetails/:id' component={UserFlightDetails}/>
        </>
    );
};
export default Userindex;