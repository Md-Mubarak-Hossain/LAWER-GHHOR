import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AddService = () => {
    const addservice = useLoaderData();
    const { _id, serviceName, servicePrice, img, description, rating } = addservice;
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
            {/* .................... */}
            <h2 className='text-xl lg:text-4xl font-extrabold text-warning text-center'>The Details Of this service</h2>
            <form onSubmit={handleSub} className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body lg:w-1/2 "> <figure><img className='w-full' src={img} alt="..." /></figure>
                    <h2 className="card-title">Payment: {servicePrice}</h2>
                    <h2 className="card-title">Ratings: {rating} stars</h2>
                    <Link to='/myreviews'><button className="btn btn-outline">go review page</button></Link>
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">{serviceName}</h2>
                    <p title={description}>{description.slice(0, 500)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning lg:w-full">Confirm to add</button>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddService;