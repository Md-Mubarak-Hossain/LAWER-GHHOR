import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import LegalService from './LegalService';
import Load from '../../Shared/Load/Load';


const LegalServices = () => {
    useTitle('legal service');
    const services = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load/>
    };
    return (
        <div className='container my-10 md:flex '>
            <div className='flex flex-col w-3/12 mx-auto gap-2 md:px-3'>
                {
                    services?.map(service=><Link to={`/LegalServiceAdd/${service?._id}`} className='btn btn-sm btn-outline rounded-full w-full'>{service?.serviceName}</Link>)
                }
            </div>
            <div className="flex flex-col w-full mdflex-row w-9/12 mr-auto">
                <div className="grid flex-grow w-full mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 flex-grow w-full mx-auto'>
                        {
                            services.map(ser => <LegalService key={ser.index}
                                ser={ser}></LegalService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalServices;