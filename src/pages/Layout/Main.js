import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Chat/Footer';
import Header from '../Shared/Header/Header';



const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;