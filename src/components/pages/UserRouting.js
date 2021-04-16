import React from 'react';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard';
import RegistrationForm from './Register/RegistrationForm';


const UserRouting = (props) => {

    var isRegistered = true;

    axios.post("https://yalepool.com/is-registered", props.netId)
        .then(response => {  
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })


    return (
        <>
            {isRegistered ? <Dashboard netId={props.netId} /> : <RegistrationForm netId={props.netId}/>}
        </>
    );
}

export default UserRouting;
