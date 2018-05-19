import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import PostArticle from "./containers/PostArticle";
import Article from "./containers/Article";
import SignUp from "./containers/SignUp"

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/signIn" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/post" component={PostArticle} />
        <Route path="/article" component={Article} />
      </div>
    );
  }
}
export default Routes;
