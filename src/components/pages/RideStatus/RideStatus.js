import React, { useEffect, useState } from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function createMatchTable(matches){
    if(matches.length != 0){
        return(
            <div>
            {matches.map(trip =>
                <table style={{border: "1px solid blue"}}>
                    <tbody>
                        <tr key={trip.groupId}>
                                <td style={{textAlign:"center", paddingRight:"50px"}}>
                                    <h2>{trip.origin}</h2>
                                    <p>-to-</p>
                                    <h2>{trip.destination}</h2>
                                </td>
                                <td style={{borderRight: "1px solid blue", width: "700px"}}>
                                    <h3>{trip.date}</h3>
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
            <h2>No trips pending match!</h2>
        )
    }
}

function notMatchedTrips(notMatched) {
    if(notMatched.length != 0){
        return (
            <div>
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
                                    <h3>{trip.date}</h3>
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
            <h3 style={{textAlign:"center"}}>No Trips Awaiting Match</h3>
        )
    }
}

const RideStatus = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        let mounted = true;
        axios.get("https://is376m6q9a.execute-api.us-east-1.amazonaws.com/dev/get-request-status")
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
                    <h1 style={{textAlign:"left", paddingBottom:"10px"}}>Pending Approval</h1>
                    {createMatchTable(matched)}
                    <hr/>
                    <h1 style={{textAlign:"left"}}>Awaiting Match</h1>
                    {notMatchedTrips(notMatched)}
                    <hr/>
                    <h1 style={{textAlign:"left"}}>Past Trips</h1>
                    <hr/>
                </div>
            <FooterContainer />
        </div>
    )
}
export default RideStatus