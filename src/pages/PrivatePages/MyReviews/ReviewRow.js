import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ reviews }) => {
    const { _id, serviceName, img, servicePrice, } = reviews;
    const [dataView, setDataView] = ([]);
    const handleDelete = id => {
        const agree = window.confirm(`Are you sure to delete?`)
        if (agree) {
            fetch(` https://lawyer-server-10.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        const remainData = dataView.filter(v => v._id !== id)
                        setDataView(remainData);
                        alert('successfully deleted')
                    }
                })
        }
    }
    return (
        <tr className='hover:text-primary py-5 my-5 mdh-20 bg-base-200 hover:bg-base-300'>
            <th></th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th></th>
            <td>
                <div className="avatar pt-5">
                    <div className="mask rounded-md w-20 h-10 mx-5 shadow-sm">
                        <img src={img} alt='/' />
                    </div>
                </div>
            </td>
            <td>{serviceName}</td>
            <td>{servicePrice}</td>
            <th><label><Link to={`/reviewUpdate/${_id}`} ><button className=' btn btn-sm btn-outline hover:btn-primary'>Update</button></Link></label></th>
            <th>
                <label>
                    <button className='btn btn-sm btn-outline hover:btn-success'>Confirm</button>
                </label>
            </th>
        </tr>
    );
};

export default ReviewRow;
