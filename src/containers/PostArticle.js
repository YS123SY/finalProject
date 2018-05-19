import React from "react";
import axios from "axios";

import "../style/SignUp.css";

class PostArticale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      Image: "",
      content: ""
    };
  }
  addArticle = value => {
    axios.post("/post", { ...value });
  };
  onChangeTitle = event => {
    const title = event.target.value;
    this.setState({
      title
    });
  };
  onChangeCategory = event => {
    const category = event.target.value;
    this.setState({
      category
    });
  };
  onChangeImage = event => {
    const Image = event.target.value;
    this.setState({
      Image
    });
  };
  onChangeContent = event => {
    const content = event.target.value;
    this.setState({
      content
    });
  };

  render() {
    return (
      <div className="sign-main">
        <div className="sign-div">
          <div className="input-div">
            <span className="span-signIn">Articale title</span>
            <input
              type="holderspace"
              value={this.state.title}
              className="input"
              placeholder="Title"
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Artical Category</span>
            <input
              type="holderspace"
              value={this.state.category}
              className="input"
              placeholder="Category"
              onChange={this.onChangeCategory}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Image</span>
            <input
              type="holderspace"
              value={this.state.img}
              className="input"
              placeholder="Image Link"
              onChange={this.onChangeImage}
            />
          </div>

          <div className="input-div">
            <span className="span-signIn">Artical Content</span>
            <textarea
              className="inputText"
              rows="10"
              cols="20"
              value={this.state.content}
              placeholder="Content"
              onChange={this.onChangeContent}
            />
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
