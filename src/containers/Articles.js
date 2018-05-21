import React from "react";
import axios from "axios";

import MainPageComponent from "./MainPageComponent";
import "../App.css";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get("/articles").then(res => {
      this.setState({ articles: res.data });
    });
  }
  render() {
    return (
      <div className="article-list">
        {this.state.articles.map((el, i) => (
          <MainPageComponent key={i} comp={el} />
        ))}
      </div>
    );
  }
}

export default Articles;
