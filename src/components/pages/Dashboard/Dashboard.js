import React from 'react';
import { FooterContainer } from '../../../containers/footer';
import {Button} from '../../Button/Button'
import Navbar from '../../Navbar/Navbar';
import './Dashboard.css';
import { useHistory } from "react-router-dom";


//get-group-members --> endpoint
    //give it the groupid
    //you get the emails of people in that group

//confirm-match
    //take netid and requestId
    //don't need to check contents, just make sure its a 200 response
    //can look at error message and see what happens

//when everyone hits confirm, everyone will get an email
//the group moves up to match made

//decline-match
    //declines a match

//all-confirmed tells you if everyone in groups has confirmed
//matched: tells you if you've been matched
//confirmed: did YOU confirm
//rematch: is this a repeat trial
    //might give you priority
    //can use it display info that can let user know it's their second try

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
                                <Button buttonSize='btn--large' buttonColor='blue' onClick={GoToRequest} style={{width:"800px"}}>Request A Ride</Button>
                            </th>
                            <th>
                                <Button buttonSize='btn--large' buttonColor='blue' onClick={GoToStatus} style={{width:"200px"}}>Ride Status</Button> {/*We're gonna need an api call here. not where*/}
                            </th>
                            <th>
                                <Button buttonSize='btn--large' buttonColor='blue' onClick={Logout} style={{width:"200px"}}>Logout</Button> {/*There's some logout of cas thing here idk how to do*/}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <FooterContainer style={{postion:"fixed", bottom:0}}/>
        </>
    );
}

export default ProfilePage
