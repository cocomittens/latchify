import React from "react";
import Home from "./home/home";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Upload from "./patterns/upload";
import Results from "./patterns/results";
import Confirm from "./session/confirm";

export default () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/upload" component={Upload} />
      <Route path="/results" component={Results} />
      <Route path="/success" component={Confirm} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
