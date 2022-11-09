import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Slider from '../Shared/Slider/Slider';


const Main = () => {
    return (
        <>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid  card  rounded-box place-items-center"> <Header></Header></div>
                <div className="divider"></div>
                <div className="grid  card  rounded-box place-items-center"><Outlet></Outlet></div>
                <div className="divider"></div>
                <div className="grid  card  rounded-box place-items-center"><Footer></Footer></div>
            </div>
        </>
    );
};

export default Main;