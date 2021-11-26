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
import FlightCard from './FlightCard';


class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flights: []
    };
 
  
  }

  componentDidMount() {
    const  {state}  = this.props.location
    if(state.from==="" && state.to==="" && state.departure==="" && state.arrival==="" && state.Cabin==="" && state.AdultdefaultOption==="" && state.ChildrendefaultOption===""){
      var from2 = "";
      var to2 = "";
      var departure2 = "";
      var arrival2 = "";
      var Cabin2 = "";
      var AdultdefaultOption2 = "";
      var ChildrendefaultOption2 = "";
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
          console.log(Cabin2)
      }
      if(state.AdultdefaultOption===""){
          var AdultdefaultOption2;
      }
      else{
          AdultdefaultOption2=state.AdultdefaultOption
      }
      if(state.ChildrendefaultOption===""){
          var ChildrendefaultOption2;
      }
      else{
          ChildrendefaultOption2 = state.ChildrendefaultOption
      }
    }
    
    const data =  {  
        from: from2,
        to: to2,
        departure : departure2,
        arrival :  arrival2,
        Cabin: Cabin2,
        AdultdefaultOption: AdultdefaultOption2,
        ChildrendefaultOption: ChildrendefaultOption2
    };
    console.log("this is data: ");
    console.log(data);
    axios
      .post('http://localhost:8000/api/FlightController/availableFlights', data)
      .then(res => {
       this.props.history.push('/availableFlights');
      
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from availableFlights');
      })
  };


  render() {
    const flights = this.state.flights;
    console.log("PrintFlights: " + flights);
    let flightlist;

    if(!flights) {
        flightlist = "there is no flight record!";
    } else {
        flightlist = flights.map((flight, k) =>
        <FlightCard flight={flight} key={k} />
      );
    }

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

          <div className="list">
                {flightlist}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;