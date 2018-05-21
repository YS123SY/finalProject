import React from "react";
import { Link } from "react-router-dom";

import "../style/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChangeEmail = event => {
    const email = event.target.value;
    this.setState({
      email
    });
  };
  onChangePassword = event => {
    const password = event.target.value;
    this.setState({
      password
    });
  };
  render() {
    return (
      <div className="login-main">
        <div className="login-div">
          <span className="spanDiv">E-mail</span>
          <div>
            <input
              className="input-div"
              type="holderspace"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <span className="spanDiv">Password</span>
          <div>
            <input
              className="input-div"
              type="holderspace"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="submit-div">
            <input type="button" value="Submit" />
            <Link to="/signUp">
              <span className="create">create one</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
