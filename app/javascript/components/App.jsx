import { Route, Switch } from "react-router-dom";

import Home from "./home/home";
import LoginContainer from "./session/login_container";
import React from "react";
import Results from "./patterns/results";
import SignupContainer from "./session/signup_container";
import Success from "./session/success";
import Upload from "./patterns/upload";

export default () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/upload" component={Upload} />
      <Route path="/results" component={Results} />
      <Route path="/success" component={Success} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
