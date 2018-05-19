import React from "react";
import { Link } from "react-router-dom";

import "../style/NavBar.css";

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search:""
    }
  }
  onSearch=(event)=>{
    const search=event.target.value
    this.setState({
      search
    })
  }
  render() {
    return (
      <div className="navbar-main">
        <div className="post">
          <Link to="/post">
            <input type="button" value="Post an article" />
          </Link>
        </div>
        <div>
          <h1 className="big-title">G M C STUDENTS BLOG</h1>
        </div>
        <div className="post">
          <input type="spaceholder" value={this.state.search} onSearch={this.onSearch}/>
        </div>
        <div className="post">
          <Link to="/login">
            <input type="button" value="Sign in" />
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
