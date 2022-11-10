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
import LegalServices from '../pages/Services/LegalServices/LegalServices';
import LegalNotices from '../pages/Services/LegalNotice/LegalNotices';
import CivilLaws from '../pages/Services/CivilLaw/CivilLaws';
import MyReviews from '../pages/PrivatePages/MyReviews/MyReviews';
import AddService from '../pages/Services/LegalServices/AddService';
import PrivateRouter from './PrivateRouter';
import LegalServiceAdd from '../pages/Services/LegalServices/LegalServiceAdd';
import ReviewUpdate from '../pages/PrivatePages/MyReviews/ReviewUpdate';

const Routes = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/service')
            },
            {
                path: '/services',
                element: <LegalServices></LegalServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/addservice',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path: '/LegalServiceAdd/:id',
                element: <PrivateRouter><LegalServiceAdd></LegalServiceAdd></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/notice',
                element: <LegalNotices></LegalNotices>
            },
            {
                path: '/civil',
                element: <CivilLaws></CivilLaws>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myreviews',
                element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>

            },
            {
                path: '/reviewUpdate/:id',
                element: <PrivateRouter><ReviewUpdate></ReviewUpdate></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/myreviews/${params.id}`)
            },
            // {
            //     path: '/reviewrow/:id',
            //     element: <PrivateRouter><ReviewRow></ReviewRow></PrivateRouter>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/myreviews/${params.id}`)
            // },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch("http://localhost:5000/blog")
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
                loader: () => fetch('http://localhost:5000/faq')
            },
            {
                path: '/about',
                element: <About></About>
            }

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