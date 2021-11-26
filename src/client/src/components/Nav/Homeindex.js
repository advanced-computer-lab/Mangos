import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn
}from './NavbarElements';


     
class HomeNavbar extends Component{
    constructor() {
        super();
        this.state = {
            from: '',
            to:'',
            departure: '',
            arrival: '',
            Cabin: '',
            AdultdefaultOption:'',
            ChildrendefaultOption:''
        };
      }

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
        const data = this.state;
        console.log(data.Cabin)
      };
    
    render(){
        const data = this.state;
        const CabinOption = ['Economy Class', 'Business Class', 'First Class'];
        const AdultOption = ['1','2','3','4','5','6','7','8','9'];
        const ChildOption = ['0','1','2','3','4','5','6','7','8'];
        const Cabin= CabinOption[0];
        const AdultdefaultOption= AdultOption[0];
        const ChildrendefaultOption = ChildOption[0];
        return(
            <div className='HomePage'>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} 
                    width = '120' height = '120' alt='Logo'/>
                </NavLink>
                <Bars />
                
                <NavBtn>
                    <NavBtnLink to='/SignIn'>SignIn</NavBtnLink>
                </NavBtn>
            </Nav>
                <div className="SearchFlight">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <br />
                    <h1 className="display-4 text-center">Search Flights</h1>
                    <p className="lead text-center">
                    <b>Round trip</b>
                    </p>

                    <form noValidate onSubmit={this.onSubmit}>
                        <div><h3>where and when</h3></div>
                        <div>From: </div>
                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='From'
                            name='from'
                            className='form-control'
                            value={this.state.from}
                            onChange={this.onChange}
                        />
                        </div>
                        <div>To: </div>
                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='To'
                            name='to'
                            className='form-control'
                            value={this.state.to}
                            onChange={this.onChange}
                        />
                        </div>
                        <div>Departure Time: </div>
                        <div className='form-group'>
                        <input
                            type='date'
                            placeholder='Departure'
                            name='departure'
                            className='form-control'
                            value={this.state.departure}
                            onChange={this.onChange}
                        />
                        </div>
                        <div>Arrival Time: </div>
                        <div className='form-group'>
                        <input
                            type='date'
                            placeholder='Arrival'
                            name='arrival'
                            className='form-control'
                            value={this.state.arrival}
                            onChange={this.onChange}
                        />
                        </div>
                        <div>Cabin: </div>
                        <Dropdown options={CabinOption} onChange={this._onSelect} value={Cabin} name='Cabin' />
                        <hr/>
                        <div><h3>Passengers</h3></div>
                        <div>Adults: </div>
                        <Dropdown options={AdultOption} onChange={this._onSelect} value={AdultdefaultOption} name='Adults'/>
                        <div>Children: </div>
                        <Dropdown options={ChildOption} onChange={this._onSelect} value={ChildrendefaultOption} name='children'/>
                        


                        <br/>
                        <br/>

                        <Link to={{pathname:`/availableFlights`, state: data}}  className="btn btn-outline-info btn-lg btn-block">
                            Search
                        </Link>
                        
                    </form>
                </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
};
export default HomeNavbar;