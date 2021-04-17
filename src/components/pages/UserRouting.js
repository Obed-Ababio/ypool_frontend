import React from "react";
import axios from "axios";
import Dashboard from "./Dashboard/Dashboard";
import RegistrationForm from "./Register/RegistrationForm";

const UserRouting = (props) => {
  var isRegistered = true;

  console.log(props.apiKey);
  const headers = {
    "api-key": props.apiKey,
  };

  const data = { netId: props.netId };

  axios
    .post("https://yalepool.com/is-registered", data, {
      headers: headers,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      {isRegistered ? (
        <Dashboard apiKey={props.api_key} netId={props.netId} />
      ) : (
        <RegistrationForm apiKey={props.api_key} netId={props.netId} />
      )}
    </>
  );
};

export default UserRouting;
