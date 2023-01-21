import React, { useContext } from 'react';
import { FaUser, FaTrash, FaPencilAlt } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Review = ({ review, handleDelete, title, handleUpdateUser}) => {
    
    const { successMessage } = useContext(AuthContext);

    // const handleUpdateUser = event => {
    //     event.preventDefault();
    //     const form       = event.target;
    //     const customerReview = form.review.value;
    //     const reviewId = review._id;

    //     const reviewData = {
    //         review: customerReview
    //     };

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
        <>
            <tr>
                <td>
                    {
                        review?.img ?
                            <img height="50px" width="50px" src={review.img} className="rounded-circle" alt="Cinque Terre" />
                            :
                            <FaUser title="User" style={{ height: '50px' }}></FaUser>
                    }
                </td>
                <td>{review.name}</td>
                <td>{review.rating}</td>
                <td>{review.review}</td>
                <td>
                    <button className='btn btn-info' title='Edit' data-bs-toggle="modal" data-bs-target={`#exampleModal-${review._id}`}><FaPencilAlt></FaPencilAlt></button>
                    <button className='ms-2 btn btn-danger' title='Delete' onClick={() => handleDelete(review._id)} ><FaTrash></FaTrash></button>
                </td>
            </tr>



            <div className="modal fade" id={`exampleModal-${review._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Service: {title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdateUser}>
                                {/* <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Rating: </b></label>
                                    <div className="form-check form-check-inline ms-2">
                                        <input className="form-check-input"  defaultChecked  type="radio" name="rating" id="inlineRadio1" defaultValue="1" />
                                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" id="inlineRadio2" defaultValue="2" />
                                        <label className="form-check-label">2</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="3" />
                                        <label className="form-check-label">3</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="4" />
                                        <label className="form-check-label">4</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="5" />
                                        <label className="form-check-label">5</label>
                                    </div>
                                </div> */}
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Review</b></label>
                                    <input type="text" hidden name='review_id' defaultValue={review._id} />
                                    <input type="text" className="form-control" name='review' defaultValue={review.review}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Update</button>
                                    {/* <button type="submit" className="btn btn-primary">Update</button> */}
                                </div>
                            </form>
                        </div>
                        <ToastContainer></ToastContainer>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;