import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate, netId) => {
    console.log(netId);
    const [values, setValues] = useState({
        netId: netId,
        date: '',
        time: '',
        origin: '',
        destination: '',
        preferred_car_type: '',
        preferred_group_size: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
        //console.log(values);
        axios.post("https://yalepool.com/ride-request", values)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;