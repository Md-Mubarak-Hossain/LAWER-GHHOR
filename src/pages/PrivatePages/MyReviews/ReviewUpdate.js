import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ReviewUpdate = ({ review }) => {
    const { img, serviceName, servicePrice } = review;
    // const myreviews = useLoaderData();
    // const [reviews, setReviews] = useState(myreviews);
    // const handleDelete = view => {
    //     const agree = window.confirm(`sure delete:${view._id}`)
    //     if (agree) {
    //         fetch(`/myreviews/${view._id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deleteCount > 0) {
    //                     alert('Successfully delete')
    //                     const remainingReview = reviews.filter(rev => rev._id !== view._id)
    //                     setReviews(remainingReview)
    //                 }
    //             })
    //     }
    // }
    return (
        <tr className='border hover:text-primary'>
            <th></th>
            <th>
                {/* <button onClick={handleDelete} className="btn btn-circle btn-outline"> */}
                <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th></th>
            <td><div className="avatar">
                <div className="mask rounded w-24 h-16">
                    <img src={img} alt='/' />
                </div>
            </div>
            </td>
            <td>{serviceName}</td>
            <td>{servicePrice}</td>
            <th><label><Link to='/reviewupdate'><button className='btn btn-sm btn-outline'>Update</button></Link></label></th>
            <th><label><button className='btn btn-sm btn-outline '> Confirm</button></label></th>
            {/* <th><label><button>Activate</button></label></th> */}
        </tr >
    );
};

export default ReviewUpdate;