import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import Load from '../../Shared/Load/Load';
import NoData from './NoData/NoData';
import ReviewRow from './ReviewRow';


const MyReviews = () => {
    useTitle('My Reviews');
    const { user, loading } = useContext(AuthContext)
    const [myreview, setReviews] = useState([])
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
        return <Load></Load>
    }

    const handleDelete = view => {
        const agree = window.confirm(`Are you sure to delete?`)
        if (agree) {
            fetch(`http://localhost:5000/myreviews/${view._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        const remainData = myreview.filter(v => v._id !== view._id)
                        setReviews(remainData);
                        alert('successfully deleted')
                    }
                })
        }
    }
    return (
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
                                myreview.map(view => <ReviewRow key={view._id}
                                    view={view}
                                    handleDelete={handleDelete}></ReviewRow>

                                )}

                        </tbody>
                    </table >
                    : <NoData></NoData>
            }
        </div >
    );
};

export default MyReviews;