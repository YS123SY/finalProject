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
      <div className="losign-main">
        <div className="losign-div">
          <div className="loinput-div">
            <span className="lospan-signIn">E-mail</span>
            <input
              type="holderspace"
              value={this.state.email}
              className="input"
              placeholder="E-mail"
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="loinput-div">
            <span className="lospan-signIn">password</span>
            <input
              type="holderspace"
              value={this.state.password}
              className="input"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>

          <div className="losubmit-div">
            <input className="lobtn-create" type="button" value="Submit" />
            <Link to="/signUp">
              <span className="locreate">create one</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
