import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./redux/reducers";


import "./App.css";

import Routes from "./Routes";
import Navbar from "./containers/NavBar";
import Footer from "./containers/Footer";

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Router>
        <div>
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
