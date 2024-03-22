import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const LegalNotices = () => {
    useTitle('Legal Notices');
    return (
        <div className="card w-11/12 shadow-xl mx-auto">
            <div className="card-body  rounded bg-base-200">
                <h2 className="card-title text-center text-3xl lg:w-1/3">Legal Notice Of Lawyer</h2>
                <h2 className="card-title text-center">Description</h2>
                <p>Succession Certificate is a certificate granted by the Courts in India to the legal heirs of a person dying intestate leaving debts and securities. Succession certificate entitles the holder to make payment of debt or transfer securities to the holder of certificate without having to ascertain the legal heir entitled to it. Apply for a Legal heir / Succession certificate with the help of a local experienced advocate. This is important for you if you want to establish yourself as the legal heir of a deceased person.</p>
                <Link to={`/notice`} className='text-primary link link-active active'>See more</Link>
            </div>
        </div >
    );
};

export default LegalNotices;