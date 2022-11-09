import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title,img,price,days,rating,description} = useLoaderData();    
    return (
        <section className='container mt-3'>
            <div className="card text-start">
                <div className="card-header">
                    <h2>{title}</h2>
                </div>

                <PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView src={img}>
                        <img src={img} className="card-img-top" alt=""></img>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h3 className="card-title pricing-card-title">$ {price}<small className="text-muted fw-light">/{days} days</small></h3>
                    <h5><b>Rating:</b> {rating}</h5>

                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer text-muted"></div>
            </div>
        </section>
    );
};

export default ServiceDetails;