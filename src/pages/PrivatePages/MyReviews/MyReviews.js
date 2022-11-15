import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import Footer from '../../Home/Chat/Footer';
import Load from '../../Shared/Load/Load';
import NoData from './NoData/NoData';
import ReviewRow from './ReviewRow';


const MyReviews = () => {
    useTitle('My Reviews');
    const { user, loading } = useContext(AuthContext)
    const [myreview, setReviews] = useState([])
    useEffect(() => {
        fetch(` https://lawyer-server-10.vercel.app/myreviews?email=${user.email}`, {
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
        return <Load></Load>
    }


    return (
        <>
            <div className="overflow-x-auto w-11/12 mx-auto">
                {
                    myreview.length > 0 ?
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
                                    myreview.map(reviews => <ReviewRow key={reviews._id}
                                        reviews={reviews}
                                        handleDel></ReviewRow>

                                    )}

                            </tbody>
                        </table >
                        : <NoData></NoData>
                }
            </div >
            <div className="grid  card  rounded-box place-items-center"><Footer></Footer></div>
        </>
    );
};

export default MyReviews;