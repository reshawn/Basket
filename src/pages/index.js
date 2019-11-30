import React from "react";
import { createMemoryHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import LandingPage from "./LandingPage/LandingPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import SignupPage from "./SignupPage/SignupPage.jsx"

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={LandingPage} />
      <Route path="/signup-page" component={SignupPage} />
    </Switch>
  </Router>
);
