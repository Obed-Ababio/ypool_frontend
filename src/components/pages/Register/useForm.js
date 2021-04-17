import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useForm = (callback, validate, netId, apiKey) => {
  const [values, setValues] = useState({
    netId: netId,
    first_name: "",
    last_name: "",
    email: "",
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
    setIsSubmitting(true);

    const api_key = apiKey;
    const headers = {
      "api-key": api_key,
    };
    axios
      .post("https://yalepool.com/users", values, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
