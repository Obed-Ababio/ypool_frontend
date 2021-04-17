import React, { useEffect, useState } from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import {Button} from '../../Button/Button';
import { useHistory } from "react-router-dom";
import './RideStatus.css';

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

function GetGroupMembers(groupId){

        const [groupMembers, setGroupMembers] = useState([])
        
        useEffect(() => {
            let mounted = true;
            let data = {'groupId': groupId}
            
            axios.post("https://yalepool.com/get-group-members", data)
                .then(response =>{
                    if(mounted){
                        setGroupMembers(response.data)
                        console.log(response.data)
                    }
                })
                .catch(error => {
                    setGroupMembers(error)
                })
        })
}


function createMatchTable(matches){
    if(matches.length != 0){
        return(
            <div>
            {matches.map(trip =>
                <table style={{border: "1px solid blue"}} key={trip.groupId}>
                    <tbody>
                        <tr key={trip.groupId}>
                                <td style={{textAlign:"center", paddingRight:"50px"}}>
                                    <h2>{trip.origin}</h2>
                                    <p>-to-</p>
                                    <h2>{trip.destination}</h2>
                                </td>
                                <td style={{borderRight: "1px solid blue", width: "700px"}}>
                                    <h3>{trip.date} at {trip.time}</h3>
                                    <h4>Preferred Car Type: {trip.preferred_car_type}</h4>
                                    <div>{GetGroupMembers(trip.groupId)}</div>
                                </td>
                                <td style={{textAlign:"center"}}>
                                    <h1>Group Size</h1>
                                    <h2>{trip.preferred_group_size}</h2>
                                </td>
                                <td>

                                </td>
                        </tr>
                    </tbody>
                </table>
            )}
            </div>
        )
    }
    else{
        return(
            <h3 style={{textAlign:"center"}}>No Matches Yet</h3>
        )
    }
}

function createAwaitTable(trips, netId, requestId){
    if(trips.length != 0){
        return(
            <div>
            {trips.map(trip =>
                <table style={{border: "1px solid blue"}} key={trip.groupId}>
                    <tbody>
                        <tr key={trip.groupId}>
                                <td style={{textAlign:"center", paddingRight:"50px"}}>
                                    <h2>{trip.origin}</h2>
                                    <p>-to-</p>
                                    <h2>{trip.destination}</h2>
                                </td>
                                <td style={{borderRight: "1px solid blue", width: "700px"}}>
                                    <h3>{trip.date} at {trip.time}</h3>
                                    <h4>Preferred Car Type: {trip.preferred_car_type}</h4>
                                </td>
                                <td style={{textAlign:"center"}}>
                                    <h1>Group Size</h1>
                                    <h2>{trip.preferred_group_size}</h2>
                                </td>
                                <td style={{textAlign:"center"}}>
                                    <Button 
                                        onClick={ConfirmMatch(trip.netId, trip.requestId)}
                                        buttonSize="btn--small"
                                        buttonColor="blue"
                                    >
                                        Confirm Match
                                    </Button>
                                    <Button 
                                        onClick={DeclineMatch(trip.netId, trip.requestId)}
                                        buttonSize="btn--small"
                                        buttonColor="blue"
                                    >
                                        Reject Match
                                    </Button>
                                </td>
                        </tr>
                    </tbody>
                </table>
            )}
            </div>
        )
    }
    else{
        return(
            <h3 style={{textAlign:"center"}}>No Matches Awaiting Your Confirmation</h3>
        )
    }
}

function NotMatchedTrips(notMatched) {
    const history = useHistory();
    const GoToRequest = (e) =>{
        e.preventDefault();
        history.push('request')
    }
    if(notMatched.length != 0){
        return (
            <div key={-1}>
            {notMatched.map(trip =>
                <table style={{border: "1px solid blue"}}>
                    <tbody>
                        <tr key={trip.groupId}>
                                <td style={{textAlign:"center", padding:"16px"}}>
                                    <h2>{trip.origin}</h2>
                                    <p>-to-</p>
                                    <h2>{trip.destination}</h2>
                                </td>
                                <td style={{borderRight: "1px solid blue", width: "700px"}}>
                                    <h3>{trip.date} at {trip.time}</h3>
                                    <h4>Preferred Car Type: {trip.preferred_car_type}</h4>
                                </td>
                                <td style={{textAlign:"center"}}>
                                    <h1>Group Size</h1>
                                    <h2>{trip.preferred_group_size}</h2>
                                </td>
                                <td>

                                </td>
                        </tr>
                    </tbody>
                </table>
            )}
            </div>
        )
    }
    else{
        return(
            <div>
            <h3 style={{textAlign:"center"}}>No Trips Awaiting Match</h3>
            <table className='center_table' key={-1}>
                <tbody>
                    <tr>
                        <th>
                        <Button buttonColor="blue" onClick={GoToRequest}>Click Here To Request A Ride</Button>
                        </th>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

//New endpoint functions

function ConfirmMatch(netId, requestId) {

    let data = {'netId': netId, 'requestId': requestId}
    let result = null

    axios.post("https://yalepool.com/confirm-match", data)
        .then(response => {
            result = response
        })
        .catch(error => {
            result = error
        })
        return result
}

function DeclineMatch(netId, requestId) {

    let data = {'netId': netId, 'requestId': requestId}
    let result = null

    axios.post("https://yalepool.com/decline-match", data)
        .then(response => {
            result = response
        })
        .catch(error => {
            result = error
        })
        return result
}

const RideStatus = (props) => {
    console.log(props)
    const [data, setData] = useState([]);

    useEffect(() =>{
        let mounted = true;
        let data = {'netId': props.netId}
        axios.post("https://yalepool.com/get-request-status", data)
            .then(response => {
                if(mounted){
                    setData(response.data)
                }
            })
            .catch(error => {
                setData(error)
            })
            return () => mounted = false;
    }, [])
    console.log(data)
    let finalizedGroup = []
    let awaitingUserConf = []
    let awaitingOtherConf = []
    let awaitingMatch = []
    data.forEach(trip => {
        if(trip.allConfirmed){
            finalizedGroup.push(trip)
        }
        else if(trip.confirmed){
            awaitingOtherConf.push(trip)
        }
        else if(trip.matched && !trip.confirmed){
            awaitingUserConf.push(trip)
        }
        else if(!trip.matched){
            awaitingMatch.push(trip)
        }
    })
    return(
        <div>
            <Navbar />
                <div style={{alignItems:"center", paddingLeft: "200px", paddingRight: "200px", paddingTop: "40px", paddingBottom: "64px"}}>
                    <h1 style={{textAlign:"left", paddingBottom:"10px"}}>Finalized Matches</h1>
                    {createMatchTable(finalizedGroup)}
                    <hr/>
                    <h1 style={{textAlign:"left", paddingBottom:"10px"}}>Awaiting Your Confirmation</h1>
                    {createAwaitTable(awaitingUserConf)}
                    <hr/>
                    <h1 style={{textAlign:"left", paddingBottom:"10px"}}>Awaiting Others' Confirmation</h1>
                    {createMatchTable(awaitingOtherConf)}
                    <hr/>
                    <h1 style={{textAlign:"left", paddingBottom:"10px"}}>Awaiting Match</h1>
                    {NotMatchedTrips(awaitingMatch)}
                </div>
            <FooterContainer />
        </div>
    )
}
export default RideStatus