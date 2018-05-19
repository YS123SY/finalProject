import React from "react";
import { Link } from "react-router-dom";


import "../style/Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login-main">
        <div className="login-div">
          <span>E-mail</span>
          <div className="input-div">
            <input type="holderspace" value="" />
          </div>

          <span>Password</span>
          <div className="input-div">
            <input type="holderspace" value="" />
          </div>
          <div className="submit-div">
            <input type="button" value="Submit" />
           <Link to="/signUp"> <span>create one</span></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
