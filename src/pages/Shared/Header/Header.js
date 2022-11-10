import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from '../../../Contexts/Context';
import { GlobalStyles } from '../Theme/Global';
import { darkTheme, lightTheme } from '../Theme/theme';
import logo from '../../../assets/logo/logo.svg';
import { setAuthToken } from '../../../Api/auth';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {

        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    const menuBar = <>
        < li tabIndex={0} >
            <Link to='/' className="btn btn-ghost normal-case hover:text-warning">Home</Link>
            <Link to='/services' className="btn btn-ghost normal-case hover:text-warning">Legal Services</Link>
            {
                (user?.email) || (user?.uid) ?
                    <>
                        <Link to='/myreviews' className="btn btn-ghost normal-case hover:text-warning">My Review</Link>
                        <Link to='/addservice' className="btn btn-ghost normal-case hover:text-warning">Add Service</Link>
                        <Link to='/' className=" hover:text-warning"><button onClick={handleLogOut} className="btn btn-black btn-sm">Log out</button></Link>
                    </>
                    :
                    <>
                        <Link to='/login' className="btn btn-ghost normal-case hover:text-warning">Log in</Link>
                        <Link to='/signup' className="btn btn-ghost normal-case hover:text-warning">Sign Up</Link>
                    </>
            }
            <Link to='/faq' className="btn btn-ghost normal-case hover:text-warning">FAQ</Link>
            <Link to='/blog' className="btn btn-ghost normal-case hover:text-warning">Blog</Link>
            <Link to='/about' className="btn btn-ghost normal-case hover:text-warning">About</Link>
        </ li >
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <div className='flex'>
                    <div className='rounded-full'>
                        <Link to='/'>
                            <img src={logo} alt='logo' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="btn btn-ghost normal-case "><span className=' lg:text-xl uppercase text-warning lg:font-extrabold'>Lawyer Ghhor</span></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-end hidden  lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/profile' className=" btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full text-xl">
                        <img src={user?.photoURL} alt=' user' title={user?.displayName} />
                    </div>
                </Link>
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
                    <input onClick={toggleTheme} type="checkbox" className="toggle toggle-sm " />
                    <GlobalStyles />
                </ThemeProvider >
            </div>
        </div >
    );
};

export default Header;