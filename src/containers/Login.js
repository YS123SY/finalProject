import React from "react";
import { Link, Router } from "react-router-dom";

import "../style/Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login-main">
        <div className="login-div">
          <span className="spanDiv">E-mail</span>
          <div>
            <input className="input-div" type="holderspace" value="" />
          </div>

          <span>Password</span>
          <div>
            <input className="input-div" type="holderspace" value="" />
          </div>
          <div>
            <input className="submit-div" type="button" value="Submit" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
