import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/Services/ServiceCard/ServiceCard';

const AllService = () => {
    const services = useLoaderData();
    return (
        <section className='container p-3'>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {
                    services.map(service => <ServiceCard  key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default AllService;