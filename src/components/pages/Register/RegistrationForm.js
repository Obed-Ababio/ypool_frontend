import React, { useState } from 'react';
import { FooterContainer } from '../../../containers/footer';
import Navbar from '../../Navbar/Navbar';
import './Form.css'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


const Form = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>  <Navbar />
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src='../images/yale_logo.png' alt='ypool logo' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} netId={props.netId} />
                ) : (
                    <FormSuccess />
                )}
            </div>
            <FooterContainer />
        </>
    );
};

export default Form;