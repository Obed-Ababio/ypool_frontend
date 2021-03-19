import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Fill out the information below and get matched!
        </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Full Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='fullname'
                        placeholder='Enter your Full Name'
                        value={values.fullname}
                        onChange={handleChange}
                    />
                    {errors.fullname && <p>{errors.fullname}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Destination</label>
                    <input
                        className='form-input'
                        type='text'
                        name='destination'
                        placeholder='Enter your destination'
                        value={values.destination}
                        onChange={handleChange}
                    />
                    {errors.destination && <p>{errors.destination}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Date</label>
                    <input
                        className='form-input'
                        type='date'
                        name='date'
                        placeholder='date'
                        value={values.date}
                        onChange={handleChange}
                    />
                    {errors.date && <p>{errors.date}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Time</label>
                    <input
                        className='form-input'
                        type='time'
                        name='time'
                        placeholder='time'
                        value={values.time}
                        onChange={handleChange}
                    />
                    {errors.time && <p>{errors.time}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Submit
        </button>
            </form>
        </div>
    );
};

export default FormSignup;