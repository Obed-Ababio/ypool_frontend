import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate, netId) => {
    const [values, setValues] = useState({
        netId: netId,
        first_name: '',
        last_name: '',
        email: ''
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
        axios.post("https://yalepool.com/users", values)
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