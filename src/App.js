import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./redux/reducers";


import "./App.css";

import Routes from "./Routes"
import Navbar from './containers/NavBar'

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Router>  
        <div>
          <Navbar/>
          <Routes/> 
        </div> 
        </Router>
      </Provider>
    );
  }
}

export default App;
