import React from "react";
import axios from "axios";

import "../style/SignUp.css";

class PostArticale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      category: "",
      image: "",
      paragh: ""
    };
  }
  addArticle = value => {
    axios.post("/post", { ...value });
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
  onChangeTitle = event => {
    const title = event.target.value;
    this.setState({
      title
    });
  };

  onChangeDate = event => {
    const date = event.target.value;
    this.setState({
      date
    });
  };
  onChangeParagh = event => {
    const paragh = event.target.value;
    this.setState({
      paragh
    });
  };

  render() {
    return (
      <div>
        <div className="sign-main">
          <div className="sign-div">
            <div className="input-div">
              <span className="span-signIn">Article Category</span>
              <input
                type="holderspace"
                value={this.state.category}
                className="input"
                placeholder="Category"
                onChange={this.onChangeCategory}
              />
            </div>

            <div className="input-div">
              <span className="span-signIn">Article Image</span>
              <input
                type="holderspace"
                value={this.state.image}
                className="input"
                placeholder="Image Link"
                onChange={this.onChangeImage}
              />
            </div>

            <div className="input-div">
              <span className="span-signIn">Article title</span>
              <input
                type="holderspace"
                value={this.state.title}
                className="input"
                placeholder="Title"
                onChange={this.onChangeTitle}
              />
            </div>

            <div className="input-div">
              <span className="span-signIn">Article Date</span>
              <input
                type="holderspace"
                value={this.state.date}
                className="input"
                placeholder="Date"
                onChange={this.onChangeDate}
              />
            </div>

            <div className="input-div">
              <span className="span-signIn">Artical Paragh</span>
              <textarea
                className="inputText"
                rows="10"
                cols="20"
                value={this.state.paragh}
                placeholder="Content"
                onChange={this.onChangeParagh}
              />
            </div>
          </div>
          <div className="submit-div">
            <button
              className="btn-create"
              onClick={() => this.addArticle(this.state)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default PostArticale;
