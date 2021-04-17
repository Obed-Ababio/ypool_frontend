import React from "react";
import axios from "axios";
import Dashboard from "./Dashboard/Dashboard";
import RegistrationForm from "./Register/RegistrationForm";

const UserRouting = (props) => {
  const netId = { netId: props.netId };

  async function checkRegistered(userNetId) {
    const headers = {
      "api-key": "4d982688-df96-43a5-ba14-bbaafcdee7ff",
    };

    return axios
      .post("https://yalepool.com/is-registered", userNetId, {
        headers: headers,
      })
      .then((response) => {
        response = response.data;
        console.log(response.isRegistered);
        return response.isRegistered;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let isRegistered = checkRegistered(netId);

  return (
    <>
      {console.log(isRegistered)}
      {isRegistered ? (
        <Dashboard apiKey={props.api_key} netId={props.netId} />
      ) : (
        <RegistrationForm apiKey={props.api_key} netId={props.netId} />
      )}
    </>
  );
};

export default UserRouting;
