import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const CivilLaws = () => {
    useTitle('Civil law');
    return (
        <div className="card w-11/12 shadow-xl mx-auto bg-slate-500">
            <div className="card-body  rounded text-center">
                <h2 className="card-title text-center text-3xl lg:w-1/3">Notice Of Civil Lawyer</h2>
                <h2 className="card-title text-center">Description</h2>
                <p>Property registration refers to the recording of the property document details in the Registrar’s office and preserving the original documents with the Registering officer. To ensure conservation of the evidence, assurance of title, publicity of documents and prevention of fraud, some documents are obligatorily registered. It is very important that each document has to be presented at the registrar office by the concerned person itself or the authorized person followed by a witness and the implied registration fee.</p>
                <Link to='/notice'><button className='btn btn-outline btn-warning'>See more</button></Link>
            </div>
        </div >
    );
};

export default CivilLaws;