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
import DepartCard from './DepartCard';
import ReturnCard from './ReturnCard';


class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flights: [],
        flights2: []
    };
 
  
  }

  componentDidMount() {
    const  {state}  = this.props.location
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
      if(state.Cabin===""){
          var Cabin2;
          console.log("notavailable")
      }
      else{
          var Cabin2 = state.Cabin;
          console.log("available")
      }
      if(state.Adults===""){
          var Adults2;
      }
      else{
          Adults2=state.Adults
      }
      if(state.Children === ""){
          var Children2;
      }
      else{
        Children2 = state.Children
      }
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
       this.props.history.push('/availableFlights');
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
       this.props.history.push('/availableFlights');
        this.setState({
          flights2: res.data,
        })

      })
      .catch(err =>{
        console.log('Error from availableFlights');
      })
  };


  render() {
    const flights = this.state.flights;
    const flights2 = this.state.flights2;
    console.log("PrintFlights: " + flights[0]);
    console.log("PrintFlights: " + flights2[0]);
    /*let flightlist;
    let flightlist2;

    if(!flights) {
        flightlist = "there is no flight record!";
    } else {
      flightlist = flights.map((flight, k) =>
        <DepartCard flight={flight} key={k} />
      );
      flightlist2 = flights2.map((flight2, k) =>
        <ReturnCard flight={flight2} key={k} />
      );
    }*/
    

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
                            <td><input type="checkbox" value={flights._id} /></td>
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
                            <td><input type="checkbox" value={flights._id} /></td>
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
              <Link to="/selectedflights" className="btn btn-outline-warning float-right">
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

export default SearchPage;