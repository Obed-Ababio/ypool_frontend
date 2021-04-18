import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard/Dashboard";
import RegistrationForm from "./Register/RegistrationForm";

const UserRouting = (props) => {
  const netId = { netId: props.netId };
  const [isRegistered, setIsRegistered] = useState(false);

  const headers = {
    "api-key": props.apiKey,
  };

  useEffect(() => {
    axios
      .post("https://yalepool.com/is-registered", netId, {
        headers: headers,
      })
      .then((response) => {
        response = response.data;
        //console.log(response.isRegistered);
        setIsRegistered(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(isRegistered.isRegistered);
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
