import React from "react";
import Home from "./home/home";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Upload from "./patterns/upload";
import Results from "./patterns/results";

export default () => (
  <Switch>
    <Route path="/signup" component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/upload" component={Upload} />
    <Route path="/results" component={Results} />
    <Route exact path="/" component={Home} />
  </Switch>
);
