import React, { useContext, useEffect, useState } from 'react';
import { setAuthToken } from '../../../Api/auth';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user, loading } = useContext(AuthContext)
    const [myreview, setReviews] = useState([])
    // const url = `http://localhost:5000/myreviews?email=${user.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('myreviews-service-token')}`
            }
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)

            })
            .catch(err => console.error(err))
    }, [user?.email])
    if (loading) {
        return <p>load....</p>
    }
    return (
        <div className="overflow-x-auto w-11/12 mx-auto">
            <table className="table w-full">
                <p> TotalReview: {myreview.length}</p>
                <thead>

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
                </thead>

                <tbody>
                    {
                        myreview.map(review => <ReviewRow key={review._id}
                            review={review}></ReviewRow>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyReviews;