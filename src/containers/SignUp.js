import React from "react";

import "../style/signIn.css";

export default  class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            Image:"",
            password:'',
            confirme:''

        }
    }
    onChangeName=(event)=>{
        const name = event.target.value;
        this.setState({
            name
        })
    }
    onChangeEmail=(event)=>{
        const email = event.target.value;
        this.setState({
            email
        })
    }
    onChangeImage=(event)=>{
        const Image = event.target.value;
        this.setState({
            Image
        })
    }
    onChangePassword=(event)=>{
        const password = event.target.value;
        this.setState({
            password
        })
    }
    onChangeConfirmPassword=(event)=>{
        const confirme = event.target.value;
        this.setState({
            confirme
        })
    }
  render() {
    return (
      <div className="sign-main">

        <div className="sign-div">
        <div className="input-div">
            <span className="span-signIn">Name</span>
            <input type="holderspace" value={this.state.name} className='input' placeholder="Name" onChange={this.onChangeName}/>
          </div>

          <div className="input-div">
            <span className="span-signIn">E-mail</span>
            <input type="holderspace"  value={this.state.email} className='input' placeholder="email" onChange={this.onChangeEmail}/>
          </div>

          <div className="input-div">
            <span className="span-signIn">Image</span>
            <input type="holderspace" value={this.state.img} className='input' placeholder="Image Link" onChange={this.onChangeImage}/>
          </div>

          <div className="input-div">
            <span className="span-signIn">Password</span>
            <input type="holderspace" value={this.state.password} className='input' placeholder="password" onChange={this.onChangePassword}/>
          </div>
          <div className="input-div">
            <span className="span-signIn">Confirmatin Password</span>
            <input type="holderspace" value={this.state.confirme} className='input' placeholder="confirme password" onChange={this.onChangeConfirmPassword}/>
          </div>

          <div className="submit-div">
            <button className="btn-create">Submit</button>
          </div>

        </div>

      </div>
    );
  }
}