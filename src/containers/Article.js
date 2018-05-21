import React from "react";
import axios from "axios";
import "../App.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    axios.get(`/articles/${this.props.id.match.params.id}`).then(res =>
      this.setState({
        date: res.data.date,
        title: res.data.title,
        category: res.data.category,
        paragh: res.data.paragh,
        image: res.data.image
      })
    );
  };
  render() {
    console.log(this.props.id.match.params.id);
    return (
      <div>
        <p className="article-parag"> {this.state.paragh} </p>
      </div>
    );
  }
}

export default Article;
