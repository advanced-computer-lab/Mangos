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

import adminhome from '../../pages/adminhome'
import CreateFlight from '../../pages/CreateFlight';
import ShowFlightsList from '../../pages/ShowFlightsList';
import SearchPage from '../../pages/SearchPage';
import SearchFlight from '../../pages/SearchFlight';
import ShowFlightDetails from '../../pages/ShowFlightDetails';
import UpdateFlightInfo from '../../pages/UpdateFlightInfo';

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
            <Route exact path='/Admin' component={adminhome}/>
            <Route exact path='/show-flights'  component={ShowFlightsList}/>
            <Route exact path='/SearchFlight' component={SearchFlight}/>
            <Route exact path='/create-flight' component={CreateFlight}/>
            <Route exact path='/edit-flight/:id' component={UpdateFlightInfo}/>
            <Route exact path='/show-flight/:id' component={ShowFlightDetails}/>
            <Route exact path='/SearchPage' component={SearchPage}/>
        </>
    );
};
export default Navbar;