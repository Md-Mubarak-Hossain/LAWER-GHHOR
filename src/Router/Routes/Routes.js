import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../pages/Home/Home/Home';
import Service from '../../pages/Services/Service';
import Services from '../../pages/Services/Services';
import FourOfFour from '../FourOfFour/FourOfFour';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <Service></Service>
            },
        ]
    },
    {
        path: '/*',
        element: <FourOfFour></FourOfFour>
    }
])