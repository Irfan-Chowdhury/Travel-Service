import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from './Review/Review';

const ServiceWiseReviews = ({ service }) => {

    const { successMessage, logOut } = useContext(AuthContext);
    const { _id, title } = service;
    const serviceId = _id;


    const [reviews, setReviews] = useState([]);

    // Load Service wise Reviews
    useEffect(() => {
        fetch(`https://service-review-server-murex.vercel.app/reviews/${serviceId}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('travelServiceToken')}`
            }
        })
            .then(res => {
                // console.log(res.status);
                // return 'Access Denied';
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviews(data));
        }, [serviceId,logOut]);


    // Review Delete
    const handleDelete = (reviewId) => {
        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            fetch(`https://service-review-server-murex.vercel.app/review/${reviewId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== reviewId);
                        setReviews(remaining);
                        successMessage();
                    }
                });
        }
    }


    // Review Update
    const handleUpdateUser = (event) => {
        event.preventDefault();
        const form       = event.target;
        const customerReview = form.review.value;
        const reviewId = form.review_id.value;

        const reviewData = {
            review: customerReview
        };

        fetch(`https://service-review-server-murex.vercel.app/review/${reviewId}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {

            // const newReviewData = {
            //     _id:reviewId,
            //     service_id: data.service_id,
            //     // service_title: title,
            //     img: data.img,
            //     name: data.name,
            //     email: data.email,
            //     rating: data.rating,
            //     review: data.review
            // };

            // console.log(newReviewData);
            // const updatedReview = [newReviewData];
            // setReviews(updatedReview);
            // reviews();

            // if (data.modifiedCount > 0) {
                successMessage();
            //     const updatedReview = [...reviews, data]
            //     setReviews(updatedReview);
            // }
        })
    }

    return (
        <div className="card mt-3">
            <div className="card-header">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Image</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Review</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.length > 0 ?
                                reviews.map(review => <Review handleUpdateUser={handleUpdateUser} key={review._id} review={review} title={title} handleDelete={handleDelete}></Review>)
                                :
                                <tr>
                                    <td><h2 className='p-4 text-danger'>No Review Found</h2></td>
                                </tr>
                        }
                    </tbody>
                </table>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ServiceWiseReviews;