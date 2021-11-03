import React from 'react';
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
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/SearchFlights" activestyle>
                        SearchFlights
                    </NavLink>
                    <NavLink to="/ShowAllFlights" activestyle>
                        ShowAllFlights
                    </NavLink>
                    <NavLink to='/SignUp' activestyle>
                        SignUp
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/SignIn" activestyle>
                        SignIn
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
export default Navbar;