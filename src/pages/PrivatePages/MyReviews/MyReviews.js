import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import NoData from './NoData/NoData';
import ReviewRow from './ReviewRow';


const MyReviews = () => {
    useTitle('My Reviews');
    const { user, loading } = useContext(AuthContext)
    const [myreview, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://lawyer-server-10.vercel.app/myreviews?email=${user.email}`, {
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
        return <p>loading...</p>
    }


    return (
        <>
            <div className="w-full mx-auto px-4 mdw-4/5 py-5">
                {
                    myreview.length > 0 ?
                        <span>
                            <p className="text-center border-2 border-gray-200 mb-4 p-2"> TotalReview: {myreview.length}</p>
                            <table className="w-full">
                            <thead>
                                <tr className="bg-base-300 h-10 mb-4">
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
                            <tbody className="py-5">
                                {
                                    myreview.map(reviews => <ReviewRow key={reviews._id}
                                        reviews={reviews}
                                        handleDel></ReviewRow>

                                    )}
                            </tbody>
                        </table >
                        </span>
                        : <NoData></NoData>
                }
            </div >
        </>
    );
};

export default MyReviews;