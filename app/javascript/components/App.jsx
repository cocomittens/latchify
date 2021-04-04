import React from "react";
import Home from "./home/home";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session/signup_container";

export default () => (
  <Switch>
    <Route path="/signup" component={SignupContainer} />
    <Route exact path="/" component={Home} />
  </Switch>
);
