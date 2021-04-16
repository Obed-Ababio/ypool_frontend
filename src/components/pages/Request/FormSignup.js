import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Countries from '../test';
import FavouriteTeam from '../testrender';
import destinations_list from './destinationsList';
import CreateDropdown from './CreateDropdown';
import destinationsList from "./destinationsList";



const FormSignup = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        props.submitForm,
        validate,
        props.netId
    );

    const some_list = destinationsList;

    const [destinationsListState, setstate] = useState(destinationsList);
    
    return (
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Fill out the information below and get matched!</h1>
          <div className="form-inputs">
            <label className="form-label">Origin</label>
            <select
              className="form-input"
              type="text"
              name="origin"
              placeholder="Enter your Origin"
              value={values.origin}
              onChange={handleChange}
            >
              {some_list.map(CreateDropdown)}
            </select>
            {errors.origin && <p>{errors.origin}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Destination</label>
            <select
              className="form-input"
              type="text"
              name="destination"
              placeholder="Enter your Destination"
              value={values.destination}
              onChange={handleChange}
            >
              {some_list.map(CreateDropdown)}
            </select>
            {errors.destination && <p>{errors.destination}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Date</label>
            <input
              className="form-input"
              type="date"
              name="date"
              placeholder="date"
              value={values.date}
              onChange={handleChange}
            />
            {errors.date && <p>{errors.date}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Time</label>
            <input
              className="form-input"
              type="time"
              name="time"
              placeholder="time"
              value={values.time}
              onChange={handleChange}
            />
            {errors.time && <p>{errors.time}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Car Type</label>
            <select
              className="form-input"
              type="text"
              name="preferred_car_type"
              placeholder="Enter your Preferred Car Type"
              value={values.preferred_car_type}
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option selected value="Regular">
                Regular
              </option>
              <option value="XL">XL</option>
            </select>
            {errors.preferred_car_type && <p>{errors.preferred_car_type}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Group Size</label>
            <select
              className="form-input"
              type="text"
              name="preferred_group_size"
              placeholder="Enter your Preferred Group Size"
              value={values.preferred_group_size}
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            {errors.preferred_group_size && (
              <p>{errors.preferred_group_size}</p>
            )}
          </div>

          <button className="form-input-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
};

export default FormSignup;