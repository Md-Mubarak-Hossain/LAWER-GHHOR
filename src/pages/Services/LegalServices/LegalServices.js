import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
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
        <div className='my-10'>
            <div className="flex flex-col w-full mdflex-row">
                <div className="grid flex-grow w-11/12 mx-auto card  rounded-box place-items-center">
                    <div className='grid grid-cols-1 mdgrid-cols-2 flex-grow  card  rounded-box place-items-center w-11/12 mx-auto'>
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