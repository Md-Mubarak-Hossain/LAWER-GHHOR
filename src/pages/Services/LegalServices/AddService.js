import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AddService = () => {
    const addservice = useLoaderData();
    const { serviceName, servicePrice, img, description, rating } = addservice;
    console.log(addservice);
    const handleSub = event => {
        event.preventDefault();
        event.target.reset();
        fetch('http://localhost:5000/myreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservice)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Successfully service added')
                }
            })
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-xl lg:text-4xl font-extrabold text-warning text-center'>The Details Of this service : <span className='text-primary'> {serviceName}</span> </h2>
            <form onSubmit={handleSub} className="card lg:card-side  shadow-xl">
                <div className="card-body lg:w-1/2 "> <figure><img className='w-full rounded' src={img} alt="..." /></figure>
                    <p>{description.slice(0, 100)} <span className='text-blue-700' title={description.slice(100,)}>...see more</span></p>
                    <div className='grid grid-cols-2'>
                        <h2 className="card-title">Payment: {servicePrice}</h2>
                        <h2 className="card-title">Ratings: {rating} stars</h2>
                    </div>
                    <Link to='/myreviews'><button className="btn btn-outline btn-ghost">go review  &gt;</button></Link>
                </div>
                <div className="card-body lg:w-1/2">
                    <div className='card-body mb-0 pb-0  bg-red-300 rounded'>
                        <div className='grid grid-cols-2'>
                            <input type="text" name="firstName" placeholder=" first name" className="input input-bordered w-full max-w-xs" />
                            <input type="text" name="lastName" placeholder="last name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="email" name="lastName" placeholder="your email" className="input input-bordered w-full" />
                        <textarea name="details" className="textarea textarea-bordered w-full" placeholder="write about service why need?"></textarea>
                        <div className="card-body card-actions justify-center mt-0 pt-0">
                            <button className="btn btn-outline btn-secondary 
                            hover:btn-warning w-full">Confirm to add</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddService;