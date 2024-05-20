import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import CivilLaws from '../../Services/CivilLaw/CivilLaws';
import LegalNotices from '../../Services/LegalNotice/LegalNotices';
import LegalService from '../../Services/LegalServices/LegalService';
import Slider from '../../Shared/Slider/Slider';



const Home = () => {
    useTitle('Home');
    const service = useLoaderData();
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className=""><span className="loading loading-spinner loading-lg bg-white">loading...</span></div>
    }
    return (
        <>
            <div className='min-h-screen'>
            <Slider></Slider>
            </div>
            <div className='my-6 flex flex-col  justify-center items-center w-full'>
                <h2 className='text-2xl mdtext-4xl font-extrabold text-center text-warning mdw-1/3 my-4'>Our Legal services</h2>
                <p className='mdw-1/2 text-xl mb-4 text-center'>My service of lawyer  is most great full.The people of my country proud for me.I deliver this service by web based platform.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 flex-grow  rounded-box place-items-center w-10/12 mx-auto'>
                    {
                        service.map(ser => <LegalService key={ser.index}
                            ser={ser}></LegalService>)
                    }
                </div >
                <div className='my-6 py-5 w-full flex flex-col justify-center items-center '>
                    <Link to={`/services`} className='text-primary link link-active active'>See more services
                    </Link >
                </div>
            </div >
            <div className='my-6 py-4'>
                <LegalNotices></LegalNotices>
            </div>
            <div className='my-5 py-3'>
                <CivilLaws></CivilLaws>
            </div>

        </>
    );
};
export default Home;