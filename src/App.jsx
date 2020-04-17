import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import "./views/screen/bootstrap.css";

import HomeScreen from "./views/screen/HomeScreen";

import CounterScreen from "./views/screen/CounterScreen";
import AuthScreen from "./views/screen/AuthScreen";
import InputScreen from "./views/screen/InputScreen";
import LifecycleScreen from "./views/screen/LifecycleScreen";
import PageNotFound from "./views/screen/PageNotFound";
import Navbar from "./views/screen/Navbar";
import ProfileScreen from "./views/screen/ProfileScreen";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/counter" component={CounterScreen} />
        <Route exact path="/auth" component={AuthScreen} />
        <Route exact path="/input" component={InputScreen} />
        <Route exact path="/lifecycle" component={LifecycleScreen} />
        <Route exact path="/profile/:pikachu" component={ProfileScreen} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default withRouter(App);
