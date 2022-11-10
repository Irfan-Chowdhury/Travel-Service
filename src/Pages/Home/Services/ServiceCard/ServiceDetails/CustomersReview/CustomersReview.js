import React from 'react';
import { FaMailBulk } from 'react-icons/fa';

const CustomersReview = ({review}) => {
    return (
        <div className="row g-0">
            <div className="d-flex justify-content-start">
                <div className='p-4'>
                    <img height="50px" width="50px" src={review.img} className="rounded-circle" alt="Cinque Terre" />
                </div>
                <div>
                    <div className="card-body">
                        <h6 className="card-title">{review.name} || <FaMailBulk></FaMailBulk> {review.email}</h6>
                        <p className="card-text">{review.review}</p>
                        <p className="card-text"><small className="text-muted">Rating: {review.rating}</small></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomersReview;