import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import star from '../../../assets/svg/star.svg';
const LegalService = ({ ser }) => {
    useTitle('Legal Service');
    const { serviceName, servicePrice, rating, img, description, _id } = ser;
    return (
        <div className='shadow-lg p-2 flex flex-col justify-center items-center m-2 border-2 border-dotted bg-gray-500 rounded-lg'>
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
                <p className='text-lg text-blue-400'>{serviceName}</p>
                <div className='flex justify-between'>
                    <p>Service price:{servicePrice}</p>
                    <div className='flex flex-row justify-center items-center'>ratings:{rating}<img src={star} alt="star" className='w-4 h-4'/></div>
                </div>
                <p className='my-2'>{description.slice(0, 100)}</p>
                <Link to={`/LegalServiceAdd/${_id}`} className='btn btn-xs btn-outline bg-base-300 rounded-full lowercase'>service add</Link>
            </div>
        </div>
    );
};

export default LegalService;