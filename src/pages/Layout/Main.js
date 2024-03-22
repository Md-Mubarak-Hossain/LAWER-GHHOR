import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';



const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="min-h-screen"><Outlet></Outlet></div>
            <Footer></Footer>
        </>
    );
};

export default Main;