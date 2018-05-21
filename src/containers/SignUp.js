import React from "react";
import axios from "axios";
import "../style/SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      image: "",
      password: "",
      confirme: ""
    };
  }

  addUser = user => {
    axios.post("/signup", { ...user });
  };

  onChangeName = event => {
    const name = event.target.value;
    this.setState({
      name
    });
  };
  onChangeEmail = event => {
    const email = event.target.value;
    this.setState({
      email
    });
  };
  onChangeImage = event => {
    const image = event.target.value;
    this.setState({
      image
    });
  };
  onChangePassword = event => {
    const password = event.target.value;
    this.setState({
      password
    });
  };
  onChangeConfirmPassword = event => {
    const confirme = event.target.value;
    this.setState({
      confirme
    });
  };
  render() {
    return (
      <div className="sign-main">
        <div className="sign-div">
          <div className="input-div">
            <span className="span-signIn">Name</span>
            <input
              type="holderspace"
              value={this.state.name}
              className="input"
              placeholder="Name"
              onChange={this.onChangeName}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">E-mail</span>
            <input
              type="holderspace"
              value={this.state.email}
              className="input"
              placeholder="email"
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Image</span>
            <input
              type="holderspace"
              value={this.state.image}
              className="input"
              placeholder="Image Link"
              onChange={this.onChangeImage}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Password</span>
            <input
              type="holderspace"
              value={this.state.password}
              className="input"
              placeholder="password"
              onChange={this.onChangePassword}
            />
          </div>
          <div className="input-div">
            <span className="span-signIn">Confirmatin Password</span>
            <input
              type="holderspace"
              value={this.state.confirme}
              className="input"
              placeholder="confirme password"
              onChange={this.onChangeConfirmPassword}
            />
          </div>

          <div className="submit-div">
            <button
              className="btn-create"
              onClick={() => this.addUser(this.state)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
