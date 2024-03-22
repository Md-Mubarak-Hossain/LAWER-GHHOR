import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import Load from '../../Shared/Load/Load';

const ReviewUpdate = () => {
    useTitle('Update Review');
    const review = useLoaderData();
    console.log(review)
    const { loading, user } = useContext(AuthContext)
    const [reviewer, setReviewer] = useState(review)

    const handleSub = event => {
        event.preventDefault();
        fetch(` https://lawyer-server-10.vercel.app/myreviews/${reviewer._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })

            .then(res => res.json())
            .then(data => {

                if (data.modified > 0) {
                    alert('successfully updated!!!');
                    event.target.reset();
                }


            })
    }
    const onChangeHandle = event => {
        const value = event.target.value;
        const field = event.target.field;
        const newReview = { ...reviewer }
        newReview[field] = value;
        setReviewer(newReview);
    }


    if (loading) {
        return <Load></Load>
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-xl lg:text-xl font-extrabold text-primary text-center'>Update Form</h2>
            <h2 className='py-2 text-xl lg:text-2xl font-extrabold text-warning text-center'>The Details Of this service : <span className='text-primary'> {review.serviceName}</span> </h2>
            <div className="card z-1 lg:card-side  shadow-xl grid grid-cols-1 lg:grid-cols-2">
                <div className="card-body w-11/12 mx-auto lg:w-full  bg-base-300 text-gray-200 rounded">
                    <h2>Your Previous  Information</h2>
                    <h2>Reviewer Name:{review.reviewer}</h2>
                    <h2>Email:{review.email}</h2>
                    <h2>Phone:{review.phone}</h2>
                    <h2>Comment:{review.message}</h2>
                </div>
                <form form onSubmit={handleSub} className="card-body w-11/12 mx-auto lg:w-full  bg-blue-900 rounded">
                    <h2>Your Update field</h2>
                    <input onChange={onChangeHandle} type="text" name="firstName" placeholder=" first name" className="input input-bordered w-full max-w-xs" required />
                    <input onChange={onChangeHandle} type="text" name="lastName" placeholder="last name" className="input input-bordered w-full max-w-xs" required />
                    <input onChange={onChangeHandle} type="number" name="phone" placeholder="your phone" className="input input-bordered w-full max-w-xs" required />
                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />
                    <textarea onChange={onChangeHandle} name="message" className="textarea textarea-bordered w-full max-w-xs" placeholder="why you want to update?" required></textarea>
                    <button className="btn btn-outline btn-secondary 
                            hover:btn-warning w-full max-w-xs">Confirm Update</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewUpdate;