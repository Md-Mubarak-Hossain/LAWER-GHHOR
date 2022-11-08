import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Account/Login/Login';
import SignUp from '../pages/Account/SignUp/SignUp';
import Blog from '../pages/publicPages/Blog/Blog';
import Faq from '../pages/publicPages/Faq/Faq';
import Home from '../pages/Home/Home/Home';
import Main from '../pages/Layout/Main';
import FourOfFour from './FourOfFour';
import About from '../pages/publicPages/About/About';

const Routes = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
    {
        path: '*',
        element: <FourOfFour></FourOfFour>
    }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider >
    );
};

export default Routes;