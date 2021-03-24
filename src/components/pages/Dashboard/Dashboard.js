import React from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import './Dashboard.css';
import axios from 'axios';

const ProfilePage = () => {
    return (
        <>  <Navbar />
            <div className='home__profile-section'>
                <h1>Dashboard</h1>
                
            </div>
            <FooterContainer />
        </>
    );
}

export default ProfilePage
