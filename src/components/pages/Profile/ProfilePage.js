import React from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <>  <Navbar />
            <div className='home__profile-section'>
               <h1>You are signed in as (netid) </h1>
            </div>
            <FooterContainer />
        </>
    );
}

export default ProfilePage
