import React from 'react';
import Logo from '../images/Logo.svg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn
}from './NavbarElements';


const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/Admin">
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
                
            </Nav>
        </>
    );
};
export default Navbar;