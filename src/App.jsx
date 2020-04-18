import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import "./views/screen/bootstrap.css";

import Navbar from "./views/screen/Navbar";
import HomeScreen from "./views/screen/HomeScreen";
import RegisterScreen from "./views/screen/RegisterScreen";
import LoginScreen from "./views/screen/LoginScreen";
import ProfileScreen from "./views/screen/ProfileScreen";
import UserListScreen from "./views/screen/UserListScreen";
import PageNotFound from "./views/screen/PageNotFound";

import ProfileScreencopy from "./views/screen/ProfileScreencopy";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/userlist" component={UserListScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/profile/:user" component={ProfileScreen} />
        <Route exact path="/auth/:user" component={ProfileScreencopy} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default withRouter(App);
