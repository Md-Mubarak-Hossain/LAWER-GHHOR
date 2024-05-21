import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const LegalService = ({ ser }) => {
    useTitle('Legal Service');
    const { serviceName, servicePrice, rating, img, description, _id } = ser;
    return (
        <div className='shadow-lg p-2 flex flex-col justify-center items-center m-2 border-2 border-dotted'>
            <div className='w-full p-4 rounded'>
                <div className="rounded-md">
                <PhotoProvider className="foo">
                    <PhotoView src={img}>
                        <img src={img} alt="service" className='w-56 h-56 rounded-md p-4 mx-auto bg-base-300' />
                    </PhotoView>
                </PhotoProvider>
                </div>
            </div>
            <div className='md:h-40 text-xs'>
                <p>{serviceName}</p>
                <div className='flex justify-between'>
                    <p>Service price:{servicePrice}</p>
                    <p>ratings:{rating} stars</p>
                </div>
                <p>{description.slice(0, 100)}</p>
                <Link to={`/LegalServiceAdd/${_id}`} className='btn btn-xs btn-outline text-primary link link-active active mt-2 lowercase'>service add</Link>
            </div>
        </div>
    );
};

export default LegalService;