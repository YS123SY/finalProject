import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

import Routes from "./Routes"
import Navbar from './containers/NavBar'

class App extends Component {


  render() {
    return (
      <Router>  
      <div>
        <Navbar/>
        <Routes/> 
      </div> 
       
      </Router>
    );
  }
}

export default App;
