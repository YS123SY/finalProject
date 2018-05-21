import React, { Component } from "react";
import "../App.css";
import MainPageComponent from "./MainPageComponent";
import NavBar from "./NavBar";
import Articles from "./Articles";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Articles />
      </div>
    );
  }
}

export default HomePage;
