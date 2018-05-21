import React from "react";
import axios from "axios";
import "../App.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    axios.get(`/user/${this.props.id.match.params.id}`).then(res =>
      this.setState({
        name: res.data.name,
        email: res.data.email,
        image: res.data.image,
        password: res.data.password,
        confirme: res.data.confirme
      })
    );
  };

  onChangeCategory = event => {
    const category = event.target.value;
    this.setState({
      category
    });
  };
  onChangeImage = event => {
    const image = event.target.value;
    this.setState({
      image
    });
  };
  upDateUser = value => {
    axios.put(`/user/${this.props.id.match.params.id}`, { ...value });
  };
  render() {
    console.log(this.props.id.match.params.id);
    return (
      <div>
        <div className="divImage">
          <img className="imageUser" src={this.state.image} />
        </div>
        <div className="divPara">
          <h4> User Name : {this.state.name} </h4>
          <h6>Number of posted :{} </h6>
          <button
            className="btn-user"
            onClick={() => this.upDateUser(this.state)}
          >
            Modify Profil Informations
          </button>
        </div>
      </div>
    );
  }
}

export default User;
