import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useForm = (callback, validate, netId, apiKey) => {
  console.log(netId);
  const [values, setValues] = useState({
    netId: netId,
    date: "",
    time: "",
    origin: "",
    destination: "",
    preferred_car_type: "",
    preferred_group_size: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    console.log(errors);
    setIsSubmitting(true);

    const api_key = apiKey;
    const headers = {
      "api-key": api_key,
    };
    axios
      .post("https://yalepool.com/ride-request", values, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    history.push("/home");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
