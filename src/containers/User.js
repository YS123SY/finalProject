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
  render() {
    return (
      <div>
        <p className="article-parag"> {this.state.paragh} </p>
      </div>
    );
  }
}

export default User;
