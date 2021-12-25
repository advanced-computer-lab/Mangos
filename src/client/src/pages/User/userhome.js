import React, { Component } from 'react';
import 'react-dropdown/style.css';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';


const CabinOpt = ["Economy Class", "Business Class", "First Class"]
const AdultOption = ["1","2","3","4","5","6","7","8","9"];
const ChildOption = ["0","1","2","3","4","5","6","7","8"]
     
class HomeNavbar extends Component{
    constructor() {
        super();
        this.state = {
            from: '',
            to:'',
            departure: '',
            arrival: '',
            Cabin: 'Economy Class',
            Adults:'1',
            Children:'0'
        };
      }
      handleChange = e =>{
        this.setState({Cabin:e.target.value});
      };
      handleChange1 = e =>{
        this.setState({Adults:e.target.value});
      };
      handleChange2 = e =>{
        this.setState({Children:e.target.value});
      };

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
        const data = this.state;
      };
    
    render(){
        const data = this.state;
        const pathname = this.props.location.pathname;
        const id = pathname.split('/')[2];
        return(
            <div className='HomePage'>
                <div className="SearchFlight">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <br />
                    <h1 className="display-4 text-center">Book A Flight</h1>
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
                        <div className="select-container">
                        <select value={this.state.Cabin} onChange={this.handleChange}>
                        {CabinOpt.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                        </select>
                        </div>
                        <hr/>
                        <div><h3>Passengers</h3></div>
                        <div>Adults: </div>
                        <div className="select-container">
                        <select value={this.state.Adults} onChange={this.handleChange1}>
                        {AdultOption.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                        </select>
                        </div>

                        <div>Children: </div>                        
                        <div className="select-container">
                        <select value={this.state.Children} onChange={this.handleChange2}>
                        {ChildOption.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                        </select>
                        </div>
                        <br/>
                        <br/>

                        <Link to={{pathname:`/UseravailableFlights/${id}`, state: data,id:id}}  className="btn btn-outline-info btn-lg btn-block">
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