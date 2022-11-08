import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Account/Login/Login';
import SignUp from '../pages/Account/SignUp/SignUp';
import Home from '../pages/Home/Home/Home';
import Main from '../pages/Layout/Main';

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
        ]
    }])
    return (
        <RouterProvider router={router}>
        </RouterProvider >
    );
};

export default Routes;