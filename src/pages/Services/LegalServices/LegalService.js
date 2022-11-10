import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const LegalService = ({ ser }) => {
    useTitle('Legal Service');
    const { serviceName, servicePrice, rating, img, description, _id } = ser;
    return (
        <div className='card shadow-lg border p-2 flex flex-col justify-center items-center m-2'>
            <div className='w-full p-4 rounded '> <img className='rounded h-48' src={img} alt={serviceName} /></div>
            <div className='card-body lg:h-64'>
                <p>{serviceName}</p>
                <div className='flex justify-between'>
                    <p>Service price:{servicePrice}</p>
                    <p>ratings:{rating} stars</p>
                </div>
                <p>{description.slice(0, 100)}</p>
                <Link to={`/LegalServiceAdd/${_id}`}><button className=' btn btn-outline btn-warning'>See Service</button></Link>
            </div >
        </div >
    );
};

export default LegalService;