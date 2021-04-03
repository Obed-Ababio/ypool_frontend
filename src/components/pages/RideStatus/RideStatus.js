import React, { useEffect, useState } from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import {Button} from '../../Button/Button';
import { useHistory } from "react-router-dom";
import './RideStatus.css';

//Matched
    //ideally click here to view members
    //need to show who matched with, names and emails, check your email!
//Awaitng Match

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
                        <Button onClick={GoToRequest}>Click Here To Request A Ride</Button>
                        </th>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
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
    var matched = []
    var notMatched = []
    data.forEach(trip => {
        if(trip.matched){
            matched.push(trip)
        }
        else{
            notMatched.push(trip)
        }
    })
    return(
        <div>
            <Navbar />
                <div style={{alignItems:"center", paddingLeft: "200px", paddingRight: "200px", paddingTop: "40px", paddingBottom: "64px"}}>
                    <h1 style={{textAlign:"left", paddingBottom:"10px"}}>Matches</h1>
                    {createMatchTable(matched)}
                    <hr/>
                    <h1 style={{textAlign:"left"}}>Awaiting Match</h1>
                    {NotMatchedTrips(notMatched)}
                </div>
            <FooterContainer />
        </div>
    )
}
export default RideStatus