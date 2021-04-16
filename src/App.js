import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./components/pages/Welcome/Welcome";
import RegistrationForm from "./components/pages/Register/RegistrationForm";
import RequestForm from "./components/pages/Request/RequestForm";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import RideStatus from "./components/pages/RideStatus/RideStatus";
import "./App.css";
import testrender from "./components/pages/testrender";
import FlavorForm from "./components/pages/test";
import UserRouting from "./components/pages/UserRouting";

const App = ({ flask_token }) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Welcome netId={flask_token} />}
          />
          <Route
            path="/home"
            exact
            render={() => <UserRouting netId={flask_token} />}
          />

          <Route
            path="/request"
            exact
            render={() => <RequestForm netId={flask_token} />}
          />
          <Route
            path="/ridestatus"
            exact
            render={() => <RideStatus netId={flask_token} />}
          />
          <Route path="/test" exact Component={FlavorForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
