import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Account/Login/Login';
import SignUp from '../pages/Account/SignUp/SignUp';
import Blog from '../pages/publicPages/Blog/Blog';
import Faq from '../pages/publicPages/Faq/Faq';
import Home from '../pages/Home/Home/Home';
import Main from '../pages/Layout/Main';
import FourOfFour from './FourOfFour';
import LegalServices from '../pages/Services/LegalServices/LegalServices';
import LegalNotices from '../pages/Services/LegalNotice/LegalNotices';
import CivilLaws from '../pages/Services/CivilLaw/CivilLaws';
import MyReviews from '../pages/PrivatePages/MyReviews/MyReviews';
import PrivateRouter from './PrivateRouter';
import LegalServiceAdd from '../pages/Services/LegalServices/LegalServiceAdd';
import ReviewUpdate from '../pages/PrivatePages/MyReviews/ReviewUpdate';
import LegalNotice from '../pages/Services/LegalNotice/LegalNotice';
import Chat from '../pages/Home/Chat/Chat';
import File from '../pages/Home/File/File';

const Routes = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(' https://lawyer-server-10.vercel.app/service')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/file',
                element: <File></File>,
                loader: () => fetch(' https://lawyer-server-10.vercel.app/files')
            },
            {
                path: '/services',
                element: <LegalServices></LegalServices>,
                loader: () => fetch(' https://lawyer-server-10.vercel.app/services')
            },
            {
                path: '/LegalServiceAdd/:id',
                element: <PrivateRouter><LegalServiceAdd></LegalServiceAdd></PrivateRouter>,
                loader: ({ params }) => fetch(` https://lawyer-server-10.vercel.app/services/${params.id}`)

            },

            {
                path: '/notices',
                element: <LegalNotices></LegalNotices>
            },
            {
                path: '/notice',
                element: <LegalNotice></LegalNotice>
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
                path: '/chat',
                element: <PrivateRouter><Chat></Chat></PrivateRouter>,
                loader: () => fetch("https://lawyer-server-10.vercel.app/mchats")
            },
            {
                path: '/myreviews',
                element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>

            },
            {
                path: '/reviewUpdate/:id',
                element: <PrivateRouter><ReviewUpdate></ReviewUpdate></PrivateRouter>,
                loader: ({ params }) => fetch(` https://lawyer-server-10.vercel.app/myreviews/${params.id}`)
            },
            // {
            //     path: '/reviewrow/:id',
            //     element: <PrivateRouter><ReviewRow></ReviewRow></PrivateRouter>,
            //     loader: ({ params }) => fetch(` https://lawyer-server-10.vercel.app/myreviews/${params.id}`)
            // },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch(" https://lawyer-server-10.vercel.app/blog")
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
                loader: () => fetch(' https://lawyer-server-10.vercel.app/faq')
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