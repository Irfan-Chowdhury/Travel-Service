import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id,title, img, price, rating, days, short_description} = service;
    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{title}</h4>
                </div>

                <PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView src={img}>
                        <img src={img} className="card-img-top" style={{height:'200px'}} alt=""></img>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h3 className="card-title pricing-card-title">$ {price}<small className="text-muted fw-light">/{days} days</small></h3>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><b>Rating:</b> {rating}</li>
                        <li className='text-start mt-2'><b>Short Note:</b> {short_description}</li>
                    </ul>
                    <Link to={`/services/${_id}`} className="w-100 btn btn-lg btn-outline-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;