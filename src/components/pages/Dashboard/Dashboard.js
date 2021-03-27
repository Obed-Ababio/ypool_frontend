import React from 'react';
import { FooterContainer } from '../../../containers/footer';
import {Button} from '/Users/shawtylow/Documents/Spring Semester 2021/SWE/ypool_frontend/src/components/Button'
import Navbar from '../../Navbar/Navbar';
import './Dashboard.css';
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
    const history = useHistory();
    const GoToRequest = (e) =>{
        e.preventDefault();
        history.push('request')
    }
    const Logout = (e) =>{
        e.preventDefault();
        history.push('welcome')
    }
    const GoToStatus = (e) =>{
        e.preventDefault();
        history.push('ridestatus')
    }
    return (
        <>  <Navbar />
            <div className='home__profile-section'>
                <h1>Welcome to YPool!</h1>
                <table className='center_table'>
                    <tbody>
                        <tr>
                            <th>
                                <Button onClick={GoToRequest}>Request A Ride</Button>
                            </th>
                            <th>
                                <Button onClick={GoToStatus}>Ride Status</Button> {/*We're gonna need an api call here. not where*/}
                            </th>
                            <th>
                                <Button onClick={Logout}>Logout</Button> {/*There's some logout of cas thing here idk how to do*/}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <FooterContainer />
        </>
    );
}

export default ProfilePage
