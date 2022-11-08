import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LegalService from './LegalService';
import SideNav from './SideNav';

const LegalServices = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow w-4/5 card  rounded-box place-items-center">
                    <div className='grid grid-cols-1 lg:grid-cols-2 flex-grow  card  rounded-box place-items-center w-11/12 mx-auto'>
                        {
                            services.map(ser => <LegalService key={ser.index}
                                ser={ser}></LegalService>)
                        }
                    </div >
                </div>
                <div className="grid flex-grow lg:w-1/5 lg:h-96 card  rounded-box border ">
                    {
                        services.map(ser => <SideNav key={ser.index}
                            ser={ser}></SideNav>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LegalServices;