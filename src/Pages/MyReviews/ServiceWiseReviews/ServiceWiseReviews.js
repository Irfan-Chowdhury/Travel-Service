import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from './Review/Review';

const ServiceWiseReviews = ({service}) => {

    const { successMessage } = useContext(AuthContext);
    const {_id, title} = service;
    const serviceId = _id;
    

    const [reviews, setReviews] = useState([]);

    // Load Service wise Reviews
    useEffect(() => {
        fetch(`https://service-review-server-murex.vercel.app/reviews/${serviceId}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [serviceId]);


    // Review Delete
    const handleDelete = (reviewId) => {
        const proceed = window.confirm('Are you sure to delete ?');
        if(proceed){
            fetch(`https://service-review-server-murex.vercel.app/review/${reviewId}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = reviews.filter(review => review._id !== reviewId);
                    setReviews(remaining);
                    successMessage();
                }
            });
        }
    }


    // Update
    // const handleUpdateUser = (reviewId,event) => {
    //     event.preventDefault();
    //     // this.preventDefault();
    //     const form       = this.target;
    //     const customerReview = form.review.value;

    //     const reviewData = {
    //         review: customerReview
    //     };

    //     console.log(123);
    //     return;

    //     fetch(`https://service-review-server-murex.vercel.app/review/${reviewId}`,{
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(reviewData)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.modifiedCount > 0) {
    //             successMessage();

    //             // const updatedReview = [...reviews, reviewData]
    //             // setReviews(updatedReview);
    //         }
    //     })
    // }

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
                            reviews.length >0 ?
                            reviews.map(review => <Review  key={review._id} review={review} title={title} handleDelete={handleDelete}></Review>)
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