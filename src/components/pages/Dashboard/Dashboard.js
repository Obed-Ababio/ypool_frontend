import React from "react";
import { FooterContainer } from "../../../containers/footer";
import { Button } from "../../Button/Button";
import Navbar from "../../Navbar/Navbar";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import ResponsiveDrawer from "../Request/Drawer";
import axios from "axios";

const ProfilePage = (props) => {
  const history = useHistory();
  const GoToRequest = (e) => {
    e.preventDefault();
    history.push("request");
  };
  const Logout = (e) => {
    e.preventDefault();
    history.push("");
  };
  const GoToStatus = (e) => {
    e.preventDefault();
    history.push("ridestatus");
  };
  return (
    <>
      {" "}
      <Navbar />
      {/* <ResponsiveDrawer /> */}
      <div className="home__profile-section">
        <h1>Welcome to YPool!</h1>
        <table className="center_table">
          <tbody>
            <tr>
              <th>
                <Button
                  buttonSize="btn--large"
                  buttonColor="blue"
                  onClick={GoToRequest}
                >
                  Request A Ride
                </Button>
              </th>
              <th>
                <Button
                  buttonSize="btn--large"
                  buttonColor="blue"
                  onClick={GoToStatus}
                >
                  Ride Status
                </Button>{" "}
                {/*We're gonna need an api call here. not where*/}
              </th>
              <th>
                <a rel="noopener noreferrer" target="_self" href="https://yalepool.com/cas/logout"><Button buttonSize="btn--large" buttonColor="blue">
                    Logout
                </Button></a>
                {/*There's some logout of cas thing here idk how to do*/}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <FooterContainer />
    </>
  );
};

export default ProfilePage;
