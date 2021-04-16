export default function validateInfo(values) {
    let errors = {};

    if (values.origin == values.destination) {
        errors.origin = 'Origin cannot be the same as destination';
        errors.destination = 'Origin cannot be the same as destination';
    }

    if (values.origin == "None") {
        errors.origin = 'Origin cannot be left as None';
    }

    if (values.destination == "None") {
        errors.destination = 'Destination cannot be left as None';
    }

    if (!values.date) {
        errors.date = 'Departure date required';
    }
    
    if (!values.time) {
        errors.time = 'Departure time required';
    }

    if (values.preferred_car_type == "None"){
        errors.preferred_car_type = 'Car Type cannot be left as None';
    }

    if (values.preferred_group_size == "None"){
        errors.preferred_group_size = 'Group Size cannot be left as None';
    }

    return errors;
}