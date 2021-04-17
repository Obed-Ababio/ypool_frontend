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

// Now we get a key, api_key
// when we make a backend call we gotta pass a header
// header = {'api-key' : api_key}

const App = ({flask_token}) => {
  console.log({flask_token});
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/welcome' exact component={Welcome} />
              <Route path='/register' exact  render={() => <RegistrationForm netId={flask_token}/>}/>
              <Route path='/request' exact render={() => <RequestForm netId={flask_token}/>}/>
              <Route path='/ridestatus' exact render={()=> <RideStatus netId={flask_token}/>} />
              <Route path='/test' exact Component={FlavorForm} />
            </Switch>
        </Router>
      </div>
    );
}

export default App;





