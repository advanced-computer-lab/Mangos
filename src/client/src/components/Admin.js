import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import JsonDataDisplay from './ShowAllFlights';
import axios from 'axios';


class admin extends Component {
    render(){
        return(
            <JsonDataDisplay/>
        );
    }
}

export default admin;