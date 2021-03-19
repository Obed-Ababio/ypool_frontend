export default function validateInfo(values) {
    let errors = {};

    if (!values.netId.trim()) {
        errors.netId = 'Net ID required';
    } else if (!/^[a-z0-9]+/.test(values.netId.trim())) {
        errors.netId = 'Enter a valid NetID';
    }

    if (!values.first_name.trim()) {
        errors.first_name = 'First Name required';
    } else if (!/^[A-Za-z]+/.test(values.first_name.trim())) {
        errors.first_name = 'Enter a valid First Name';
    }

    if (!values.last_name.trim()) {
        errors.last_name = 'Last Name required';
    } else if (!/^[A-Za-z]+/.test(values.last_name.trim())) {
        errors.last_name = 'Enter a valid Last Name';
    }

    if (!values.email.trim()) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    return errors;
}