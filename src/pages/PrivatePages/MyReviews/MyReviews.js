import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewUpdate from './ReviewUpdate';

const MyReviews = () => {
    const myreviews = useLoaderData();
    return (
        <div className="overflow-x-auto w-11/12 mx-auto">
            <table className="table w-full">
                <tr className='bg-primary text-black'>
                    <th></th>
                    <th><label><button>DELETE</button></label></th>
                    <th></th>
                    <th></th>
                    <th>Services name</th>
                    <th><label><button>Price</button></label></th>
                    <th><label><button>EDIT</button></label></th>
                    <th><label><button>Confirmation</button></label></th>
                </tr>
                {
                    myreviews[0]?.serviceName ?
                        <>
                            {
                                myreviews.map(review => <ReviewUpdate
                                    key={review._id}
                                    review={review}>
                                </ReviewUpdate>)
                            }
                        </>
                        : <div className="card">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">No data!</h2>
                                <p>You have no select any service for review</p>
                            </div>
                        </div>
                }
            </table>
        </div >
    );
};

export default MyReviews;