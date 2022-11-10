import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import ServiceWiseReviews from './ServiceWiseReviews/ServiceWiseReviews';

const MyReviews = () => {
    
    useTitle('My Reviews');

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    });

    return (
        <div className='container mt-5'>
            <h3 className='text-center'>My Reviews</h3>
            <hr />

            {
                services.map(service => <ServiceWiseReviews key={service._id} service={service}></ServiceWiseReviews>)
            }


        </div>
    );
};

export default MyReviews;