import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            Hi!! {id}
        </div>
    );
};

export default ServiceDetails;