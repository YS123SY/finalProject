import React, { Component } from 'react';
import '../App.css';
import MainPageComponent from './MainPageComponent'
import NavBar from './NavBar';
import Articles from './Articles'



class HomePage extends Component {


  render() {
    return (
      <div className="App">
      <NavBar/>
      <Articles />
      <footer className="footer-mainp">GO MY CODE </footer>
      </div>
    );
  }
}

export default HomePage;
