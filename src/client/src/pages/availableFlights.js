import React, { Component} from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtnLink,
    NavBtn
}from '../components/Nav/NavbarElements';


class availableFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedFlights:[],
        flights: [],
        flights2: []
        
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    var name = target.name;

    if(target.checked){
      console.log("checked")
      this.state.selectedFlights[value] = name;   

    }else{
      console.log("unchecked")
      this.state.selectedFlights.splice(value, 1);
    }
    
  }


  componentDidMount() {
    const  {state}  = this.props.location
    const Cabin = state.Cabin
    const Adults = state.Adults
    const Children = state.Children

    if(state.from==="" && state.to==="" && state.departure==="" && state.arrival===""){
      var from2 = "";
      var to2 = "";
      var departure2 = "";
      var arrival2 = "";
      
    }
    else{
      if(state.from===""){
          var from2;
      }
      else{
          from2=state.from
      }
      if(state.to===""){
          var to2;
      }
      else{
          to2=state.to
      }
      if(state.departure===""){
        var departure2;
      }
      else{
          departure2=state.departure
      }
      if(state.arrival===""){
          var arrival2;
      }
      else{
          arrival2=state.arrival
      }
      var Cabin2 = Cabin;
      var Adults2 = Adults;
      var Children2 = Children;
    }
    
    const data =  {  
      from: from2,
      to: to2,
      departure : departure2,
      arrival :  arrival2,
      Cabin: Cabin2,
      Adults: Adults2,
      Children: Children2
    };
    const data2 =  {  
      from: to2,
      to: from2,
      departure : departure2,
      arrival :  arrival2,
      Cabin: Cabin2,
      Adults: Adults2,
      Children: Children2
  };
    console.log("this is data: ");
    console.log(data);
    axios
      .post('http://localhost:8000/api/FlightController/availableFlights',  data)
      .then(res => {
        this.setState({
          flights: res.data,
        })
      })
        .catch(err =>{
          console.log('Error from availableFlights');
        })

    axios
      .post('http://localhost:8000/api/FlightController/availableFlights', data2)
      .then(res => {
        this.setState({
          flights2: res.data,
        })

      })
      .catch(err =>{
        console.log('Error from availableFlights');
      })
  };


  render() {
    const  {state}  = this.props.location

    const Cabin = state.Cabin
    const Adults = state.Adults
    const Children = state.Children

    const data = this.state;
    const flights = this.state.flights;
    const flights2 = this.state.flights2;
    console.log("selected: " + data);
    console.log("PrintFlights1: " + flights);
    console.log("PrintFlights2: " + flights2);

    return (
    
      <div className="ShowFlightList">
        <Nav>
            <NavLink to="/">
                <img src={Logo} 
                width = '120' height = '120' alt='Logo'/>
            </NavLink>
            <Bars />
        </Nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Search result</h2>
            </div>


          </div>
          <h3></h3>
          <div className="container">
            <h3 className="p-3 text-center">Departure Flights:</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Select a flight</th>
                        <th>from</th>
                        <th>to</th>
                        <th>depart</th>
                        <th>arrival</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {flights && flights.map(flights =>
                        <tr>
                            <td><input type="checkbox" value={flights.flightnumber} name={flights._id} onChange={this.handleInputChange}/></td>
                            <td>{flights.from}</td>
                            <td>{flights.to}</td>
                            <td>{flights.departuretime}</td>
                            <td>{flights.arrivaltime}</td>
                            <td><Link to={`/flightdetails/${flights._id}`}>
                              Show Details
                            </Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
          </div>
          <div className="container">
            <h3 className="p-3 text-center">Return Flights:</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Select a flight</th>
                        <th>from</th>
                        <th>to</th>
                        <th>depart</th>
                        <th>arrival</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {flights2 && flights2.map(flights =>
                        <tr>
                            <td><input type="checkbox" value={flights.flightnumber} name={flights._id} onChange={this.handleInputChange}/></td>
                            <td>{flights.from}</td>
                            <td>{flights.to}</td>
                            <td>{flights.departuretime}</td>
                            <td>{flights.arrivaltime}</td>
                            <td><Link to={`/flightdetails/${flights._id}`}>
                              Show Details
                            </Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
          </div>
            <div className="col-md-11">
              <Link to={{pathname:`/selectedflights`, state: data.selectedFlights, cabin:Cabin, adults:Adults, children: Children}} className="btn btn-outline-warning float-right">
                Show Selected flights
              </Link>
              <br />
              <br />
              <hr />
            </div>
        </div>
      </div>
    );
  }
}

export default availableFlights;