import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import LegalService from './LegalService';


const LegalServices = () => {
    useTitle('Legal Service');
    const services = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <p>loading...</p>
    };
    return (
        <div className='my-10'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow w-11/12 mx-auto card  rounded-box place-items-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 flex-grow  card  rounded-box place-items-center w-11/12 mx-auto'>
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