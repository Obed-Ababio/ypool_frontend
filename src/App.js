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
import './App.css';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/welcome' exact component={Welcome} />
              <Route path='/register' exact component={RegistrationForm} />
              <Route path='/request' exact component={RequestForm} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;





