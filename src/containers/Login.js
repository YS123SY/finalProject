import React from "react";
import { Link,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from "history"

import axios from "axios";
import {loginUser,getUsers} from "../redux/actions/ArticalesActions"

import "../style/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      usersEmails:[],
      usersPassword:[],
      error:false
    };
  }
  componentDidMount = () => {
    axios.get("/login").then(res =>{
      res.data.map((el,i)=>{
        this.setState({
          usersEmails:this.state.usersEmails.concat(el.email),
          usersPassword:this.state.usersPassword.concat(el.password),
          
        })
      })
     })
  };

  onSubmit=()=>{
    const testEmail=this.state.usersEmails.includes(this.state.email,)
    const testPassword =this.state.usersPassword.includes(this.state.password)
    console.log(this.state.email,this.state.password)
    if(testEmail&&testPassword){
      this.props.history.push('/user')
    }
    else{
      this.onError()   
     }
  }
  onChangeEmail = event => {
    const email = event.target.value;
    this.setState({
      email,
      error:false
    });
  };
  onChangePassword = event => {
    const password = event.target.value;
    this.setState({
      password,
      error:false
    });
  };
  onError=()=>{
    this.setState({
      error:true
    })
  }
  render() {
    return (
      <div className="losign-main">
        <div className="losign-div">
       { this.state.error ?<div className="error"><span className="span">incorrect !!check your email and password</span></div>:null}
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
            <input className="lobtn-create" type="button" value="Submit" onClick={this.onSubmit}/>
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
