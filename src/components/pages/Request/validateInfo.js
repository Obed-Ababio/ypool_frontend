export default function validateInfo(values) {
    let errors = {};

    // if (values.origin == values.destination) {
    //     errors.origin = 'Origin cannot be the same as destination';
    // }

    if (!values.date) {
        errors.date = 'Departure date required';
    }
    
    if (!values.time) {
        errors.time = 'Departure time required'
    }
    return errors;
}