import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Slider from '../Shared/Slider/Slider';


const Main = () => {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;