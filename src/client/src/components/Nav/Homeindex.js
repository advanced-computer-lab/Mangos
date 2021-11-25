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


import SignIn from '../../pages/SignIn'

const HomeNavbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/Homepage">
                    <img src={Logo} 
                    width = '120' height = '120' alt='Logo'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to= "/SearchFlight" activestyle>
                        Search
                    </NavLink>
                    <NavLink to="/show-flights" activestyle>
                        ShowAllFlights
                    </NavLink>
                    <NavLink to="/create-flight" activestyle>
                        Add flight
                    </NavLink>
                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/SignIn'>SignIn</NavBtnLink>
                </NavBtn>
            </Nav>
            
        </>
    );
};
export default HomeNavbar;