import React from 'react';

const LegalService = ({ ser }) => {
    const { serviceName, servicePrice, rating, img, description } = ser;
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
                <button className='btn btn-outline-warning'>See Details</button>
            </div>
        </div >
    );
};

export default LegalService;