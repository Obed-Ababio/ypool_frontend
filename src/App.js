import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link } from 'react-router-dom';
import Welcome from './components/pages/Welcome/Welcome';
import RegistrationForm from './components/pages/Register/RegistrationForm';
import RequestForm from './components/pages/Request/RequestForm';
import Dashboard from './components/pages/Dashboard/Dashboard';
import RideStatus from './components/pages/RideStatus/RideStatus'
import './App.css';
import testrender from './components/pages/testrender';
import FlavorForm from './components/pages/test';


const App = ({flask_token}) => {
    return (
      
      <div className="App">
        <div>
          <h1>Hello {flask_token}</h1>
        </div>
        <Router>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/welcome' exact component={Welcome} />
              <Route path='/register' exact component={RegistrationForm} />
              <Route path='/request' exact component={RequestForm} />
              <Route path='/ridestatus' exact component={RideStatus} />
              <Route path='/test' exact Component={FlavorForm} />
            </Switch>
        </Router>
      </div>
    );
}

export default App;





