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
                    Resgister by filling the information below!
        </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Net ID</label>
                    <input
                        className='form-input'
                        type='text'
                        name='netId'
                        placeholder='Enter your Net ID'
                        value={values.netId}
                        onChange={handleChange}
                    />
                    {errors.netId && <p>{errors.netId}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>First Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='first_name'
                        placeholder='Enter your Full Name'
                        value={values.first_name}
                        onChange={handleChange}
                    />
                    {errors.first_name && <p>{errors.first_name}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Full Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='last_name'
                        placeholder='Enter your Last Name'
                        value={values.last_name}
                        onChange={handleChange}
                    />
                    {errors.last_name && <p>{errors.last_name}</p>}
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
                <button className='form-input-btn' type='submit'>
                    Submit
        </button>
            </form>
        </div>
    );
};

export default FormSignup;