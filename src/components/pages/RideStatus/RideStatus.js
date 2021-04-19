import React, { useEffect, useState } from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import {Button} from '../../Button/Button';
import { useHistory } from "react-router-dom";
import './RideStatus.css';

//To Do
    //Get the request new ride button out
    //Gonna have to write different table functions for different types of data

//api key header

function GroupInfo(props) {
    let groupId = {'groupId' : props.groupId}
    let header = props.header
    const [info, setInfo] = useState(null)

    useEffect(() =>{
        axios.post("https://yalepool.com/get-group-info", groupId, {headers: header})
            .then(response =>{
                setInfo(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [])
    if(!info){
        return(
            <>
            </>
        )
    }
    else{
        let members = info.data.names
        let departureDate = info.data.departureDate
        let departureTime = info.data.departureTime
        let destinations = info.data.destinations
        let origins = info.data.origins
        let orgKey = 0
        let destKey = 0
        let memKey = 0
        return(
            <>
                <td className="match_td_right">
                    <h3>Match Info</h3>
                    <p>Origins:</p>
                    {origins.map(org => 
                        <p key={orgKey++}>{org[0]}</p>
                    )}
                    <p>Destinations:</p>
                    {destinations.map(dest => 
                        <p key={destKey++}>{dest[0]}</p>
                    )}
                    <p>Departure Date: {departureDate}</p>
                    <p>Departure Time: {departureTime}</p>
                </td>
                <td className="match_td">
                    <h3>Group Members</h3>
                    {members.map(mem => 
                        <p key={memKey++}>{mem}</p>
                    )}
                </td>
            </>
        )
    }

}

function DecisionBox(props) {

    let data = {'netId':props.netId, 'requestId':props.requestId}
    let header = props.header
    const [result, setResponse] = useState(null)

    function accept(e) {
        e.preventDefault()
        axios.post("https://yalepool.com/confirm-match", data, {headers: header})
            .then(response => {
                setResponse(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function decline(e) {
        e.preventDefault()
        axios.post("https://yalepool.com/decline-match", data, {headers: header})
        .then(response => {
            setResponse(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    if(result){
        props.update()
    }
    if(props.needClick){
        return(
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Button 
                                buttonSize="btn--small"
                                buttonColor="blue"
                                onClick={accept}
                            >
                                Accept
                            </Button>
                        </td>
                        <td>
                            <Button 
                                buttonSize="btn--small"
                                buttonColor="blue"
                                onClick={decline}
                            >
                                Decline
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

function MatchTable(props) {


    let trips = props.trips
    if(trips.length !== 0){
        return(
            <div>
                <div className='table_div'>
                <h1 className='category'>{props.title}</h1>
                    {trips.map(trip =>
                    <div style={{paddingBottom: "10px"}}>
                    <table key={trip.groupId} className="match_table">
                        <tbody>
                            <tr>
                                <td className="match_td_right">
                                <h3 className="td_title">Request Info</h3> 
                                <p>{trip.origin} to {trip.destination}</p>
                                <p>Departure Date: {trip.date}</p>
                                <p>Preferred Departure Time: {trip.time}</p>
                                <p>Preferred Group Size: {trip.preferred_group_size}</p>
                                <p>Preferred Car Type: {trip.preferred_car_type}</p>
                                </td>
                                <GroupInfo header={props.header} groupId ={trip.groupId}/>
                                {props.needClick &&                                 
                                    <td className="match_td_left">
                                        <DecisionBox header={props.header} update={props.update} needClick={props.needClick} netId={trip.netId} requestId={trip.requestId}/>
                                    </td>
                                }
                            </tr>
                        </tbody>
                    </table>
                    </div>)}
                </div>
                <hr className="table_hr"/>
            </div>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
}

function WaitingTable(props) {
    
    let requests = props.trips
    if(requests.length != 0){
        return(
        <div>
            <div className='table_div'>
            <h1 className='category'>{props.title}</h1>
            {requests.map(request =>
                <table key={request.groupId} className="match_table">
                    <tbody>
                        <tr>
                            <td className="request_td">
                                <h3>Request Info</h3> 
                                <p>{request.origin} to {request.destination}</p>
                                <p>Departure Date: {request.date}</p>
                                <p>Preferred Departure Time: {request.time}</p>
                                <p>Preferred Group Size: {request.preferred_group_size}</p>
                                <p>Preferred Car Type: {request.preferred_car_type}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>)}
            </div>
        </div>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
}

function RideStatus(props) {

    var netId = {'netId' : props.netId}
    var header = {'api_key': props.apiKey}

    const [data, setData] = useState(null)

    function update() {
        //pass the netid to the api call
        axios.post("https://yalepool.com/get-request-status", netId, {headers: header})
            .then(response => {
                setData(response) //set it!
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    }

    useEffect(() => {
        update()
    }, [])
    //These arrays will hold our types of trips
    let finalizedGroup = []
    let awaitingUserConf = []
    let awaitingOtherConf = []
    let awaitingMatch = []
    if(data){
        data.data.forEach(trip =>{
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
    }

    //Give option to request a new ride
    let history = useHistory()
    function GoToRequest(e){
        e.preventDefault()
        history.push('request')
    }

    return(
        <div>
            <Navbar />
                <MatchTable header={header} trips={finalizedGroup} update={update} title="Confirmed Matches" needClick={false}/>
                <MatchTable header={header} trips={awaitingUserConf} update={update} title="Finalized Matches" needClick={true}/>
                <MatchTable header={header} trips={awaitingOtherConf} update={update} title="Awaiting Others' Confirmation" needClick={false}/>
                <WaitingTable header={header} trips={awaitingMatch} title="Waiting To Be Matched"/>
                <div className="center_button">
                <Button buttonColor="blue" onClick={GoToRequest} className="center_button">Click Here To Request A Ride</Button>
                </div>
            <FooterContainer/>
        </div>
    )
}

export default RideStatus