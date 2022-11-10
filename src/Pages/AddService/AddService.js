import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');


    const successMessage = () =>{ 
        toast.success('Data Saved Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form        = event.target;
        const title       = form.title.value;
        const img         = form.img.value;
        const price       = form.price.value;
        const days        = form.days.value;
        const rating      = form.rating.value;
        const short_description = form.short_description.value;
        const description = form.description.value;

        const serviceData = {
            title: title,
            img:img,
            price:price,
            days:days,
            rating:rating,
            short_description:short_description,
            description:description
        };

        fetch('http://localhost:5000/services', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(data =>{
             console.log(data)
             if(data.acknowledged){
                form.reset();
                successMessage();
             }
        })
        .catch(err => console.error(err));
    }

    

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header text-center">
                    <h2>Add Service</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" name='title' className="form-control" placeholder='Title' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Image Link</label>
                            <div className="col-sm-10">
                                <input type="text" name='img' className="form-control" placeholder='Image Link' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="number" name='price' className="form-control" placeholder='Price'/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Days</label>
                            <div className="col-sm-10">
                                <input type="text" name='days' className="form-control" placeholder='Days' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Rating</label>
                            <div className="col-sm-10">
                                <input type="text" name='rating' className="form-control" placeholder='Rating' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Short Description</label>
                            <div className="col-sm-10">
                                <input type="text" name='short_description' className="form-control" placeholder='Rating' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Long Description</label>
                            <div className="col-sm-10">
                                <textarea name="description" cols="30" rows="5"  className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button  type="submit" className="btn btn-primary">Submit</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;