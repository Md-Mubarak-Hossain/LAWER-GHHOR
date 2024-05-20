import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import Load from '../../Shared/Load/Load';

const LegalServiceAdd = () => {
    const service = useLoaderData();
    const { _id, serviceName, servicePrice, img, description, rating } = service;
    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <Load/>
    }
    console.log(service);
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const myreviews = {
            reviewId: _id,
            serviceName,
            servicePrice,
            reviewer: name,
            email,
            phone,
            message,
            img
        }
        fetch(' https://lawyer-server-10.vercel.app/myreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myreviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('successfully review added!!!');
                    form.reset();
                }
                console.log(data)

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h2 className='text-xl mdtext-4xl font-extrabold text-warning text-center'>The Details Of this service : <span className='text-primary'> {serviceName}</span> </h2>
            <form onSubmit={handleSub} className="mdflex  shadow-xl">
                <div className="card-body mdw-1/2 "> <figure><img className='w-full rounded' src={img} alt="..." /></figure>
                    <p>{description.slice(0, 100)} <span className='text-blue-700' title={description.slice(100,)}>...see more</span></p>
                    <div className='grid grid-cols-2'>
                        <h2 className="card-title">Payment: {servicePrice}</h2>
                        <h2 className="card-title">Ratings: {rating} stars</h2>
                    </div>
                    <Link to='/myreviews'><button className="btn btn-outline btn-ghost">go review  &gt;</button></Link>
                </div>
                <div className="card-body mdw-1/2">
                    <div className='card-body mb-0 pb-0  bg-base-300 rounded'>
                        <div className='grid grid-cols-2'>
                            <input type="text" name="firstName" placeholder=" first name" className="input input-bordered w-full max-w-xs" required />
                            <input type="text" name="lastName" placeholder="last name" className="input input-bordered w-full max-w-xs" required />
                            <input type="number" name="phone" placeholder="your phone" className="input input-bordered w-full max-w-xs" required />
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered w-full" placeholder="service message" required></textarea>
                        <div className="card-body card-actions justify-center mt-0 pt-0">
                            <button className="btn btn-outline btn-secondary 
                            hover:btn-warning w-full">Confirm to add</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LegalServiceAdd;