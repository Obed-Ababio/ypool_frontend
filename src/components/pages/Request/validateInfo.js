export default function validateInfo(values) {
    let errors = {};

    if (!values.fullname.trim()) {
        errors.fullname = 'Full name required';
    } else if (!/^[A-Za-z]+/.test(values.fullname.trim())) {
      errors.name = 'Enter a valid name';
    }

    if (!values.email.trim()) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.destination.trim()) {
        errors.destination = 'Destination required';
    } 

    if (!values.date) {
        errors.date = 'Departure date required';
    }
    
    if (!values.time) {
        errors.time = 'Departure time required'
    }
    return errors;
}