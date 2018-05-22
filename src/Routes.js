import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import PostArticle from "./containers/PostArticle";
import Article from "./containers/Article";
import SignUp from "./containers/SignUp";
import User from "./containers/User";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/post" component={PostArticle} />
        <Route exact path="/user" component={User} />
        <Route
          exact
          path="/article/:id"
          render={props => <Article id={props} />}
        />
        <Route exact path="/user/:id" render={props => <User id={props} />} />
      </div>
    );
  }
}
export default Routes;
