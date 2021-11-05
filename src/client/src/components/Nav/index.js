import React from 'react';
import Search from './search';
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
                <Search />
                <Bars />
                <NavMenu>
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