import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        // fetch(`services.json`)
        fetch(`https://service-review-server-murex.vercel.app/services-limit`)
        // fetch(`${process.env.REACT_APP_SERVER_ROOT_URL}/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    })

    return (
        <section>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {
                    services.map(service => <ServiceCard  key={service._id} service={service}></ServiceCard>)
                }
            </div>

            <div className="d-grid gap-2">
                <Link className="btn btn-primary" to='/services'>See All</Link>
            </div>
        </section>
    );
};

export default Services;