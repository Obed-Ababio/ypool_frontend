import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import Form from './components/pages/UserForm/Form';
import ProfilePage from './components/pages/Profile/ProfilePage';

function App() {
  return (
    <div className="App">
      {/* <Router>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
      </Router> */}
      
      <Form />

      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;

/* NOTES FOR JARED */
// Hey Big Backend guy, 
// so the main page is the live one running at the moment.
// You asked for two more pages . 
// One is the one that allows the user to enter their info .
// That insert that component with <Form />
// The other one is <ProfilePage /> which is essentially blank at the moment as 
// you asked for. 
// If you encounter any issues text me. 
// So you wanna pay attention to src > compnonents > pages > UserForm > useForm.js 
// What you are looking for is "values" which contains all the information input by the user.
// I haven't really looked into how the integration with the backend works,
// but I assume you'll just need to pass values somehow to the backend.
// Also form page doesn't display well on phone yet, everything best viewed fullscreen on laptop/desktop. 
// There are also some glitches like the button color misbehaving and disappearing on resizing.
// I'll handle those later once the main parts/pages are all connected.
// Text me if I should have done something on that front that I neglected.
// Typing this very late at night so sorry if it's not too detailed.
// I will be pretty busy this weekend but I'll do my best to add anything you need to get going.
// Peace



