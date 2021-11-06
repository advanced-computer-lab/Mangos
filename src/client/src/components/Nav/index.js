import React from 'react';
//import SearchBar from './SearchBar';
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
                    <h1>Logo</h1>
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