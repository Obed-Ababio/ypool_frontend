import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import './index.css';
import App from './App';


ReactDOM.render(
    <App flask_token={document.getElementById('root').getAttribute('flask_token')}/>,
document.getElementById('root'));

