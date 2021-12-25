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

import adminhome from '../../pages/Admin/adminhome'
import CreateFlight from '../../pages/Admin/CreateFlight';
import ShowFlightsList from '../../pages/Admin/ShowFlightsList';
import SearchPage from '../../pages/Admin/SearchPage';
import SearchFlight from '../../pages/Admin/SearchFlight';
import ShowFlightDetails from '../../pages/Admin/ShowFlightDetails';
import UpdateFlightInfo from '../../pages/Admin/UpdateFlightInfo';

import {useLocation} from "react-router-dom";

const Navbar = () => {
    const pathname = useLocation().pathname;
    const id = pathname.split('/')[2]
    console.log(id)
    return(
        <>
            <Nav>
                <NavLink to={`/Admin/${id}`}>
                    <img src={Logo} 
                    width = '120' height = '120' alt='Logo'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to= {`/SearchFlight/${id}`} activestyle>
                        Search
                    </NavLink>
                    <NavLink to={`/show-flights/${id}`} activestyle>
                        ShowAllFlights
                    </NavLink>
                    <NavLink to={`/create-flight/${id}`} activestyle>
                        Add flight
                    </NavLink>
                    
                </NavMenu>
                
            </Nav>
            <Route exact path={`/Admin/${id}`} component={adminhome}/>
            <Route exact path={`/show-flights/${id}`}  component={ShowFlightsList}/>
            <Route exact path={`/SearchFlight/${id}`} component={SearchFlight}/>
            <Route exact path={`/create-flight/${id}`} component={CreateFlight}/>
            <Route exact path={`/edit-flight/:id/${id}`} component={UpdateFlightInfo}/>
            <Route exact path='/show-flight/:id' component={ShowFlightDetails}/>
            <Route exact path= {`/SearchPage/${id}`} component={SearchPage}/>
        </>
    );
};
export default Navbar;