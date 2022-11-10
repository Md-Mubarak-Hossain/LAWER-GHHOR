import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const LegalService = ({ ser }) => {
    useTitle('Legal Service');
    const { serviceName, servicePrice, rating, img, description, _id } = ser;
    return (
        <div className='card shadow-lg border p-2 flex flex-col justify-center items-center m-2'>
            <div className='w-full p-4 rounded '>
                <PhotoProvider className="foo">
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
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