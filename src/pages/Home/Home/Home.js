import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
import LegalService from '../../Services/LegalServices/LegalService';
import Load from '../../Shared/Load/Load';
import Slider from '../../Shared/Slider/Slider';

const Home = () => {
    useTitle('Home');
    const service = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    return (
        <>
            <Slider></Slider>
            <div className='my-6 flex flex-col  justify-center items-center w-full'>
                <h2 className='text-2xl lg:text-4xl font-extrabold text-center text-warning lg:w-1/3 my-4'>Our Legal services</h2>
                <p className='lg:w-2/3 text-xl mb-4 text-center'>My service of lawyer ghhor is most greatfull.The people of my country proud for me.I deliver this service by online plateform.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 flex-grow  card  rounded-box place-items-center w-11/12 mx-auto'>
                    {
                        service.map(ser => <LegalService key={ser.index}
                            ser={ser}></LegalService>)
                    }
                </div >
                <div className='my-6 py-5 w-full flex flex-col justify-center items-center '>
                    <Link to='/services'>
                        <button className='btn btn-outline btn-warning lg:w-80 mx-auto'>See more services</button>
                    </Link >
                </div>
            </div>
        </>
    );
};
export default Home;