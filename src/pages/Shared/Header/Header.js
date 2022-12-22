import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from '../../../Contexts/Context';
import { GlobalStyles } from '../Theme/Global';
import { darkTheme, lightTheme } from '../Theme/theme';
import logo from '../../../assets/logo/logo.svg';


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
        < li tabIndex={0} className='uppercase flex place-items-center justify-end right-0'>
            <Link>
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
                    <input onClick={toggleTheme} type="checkbox" className="toggle toggle-sm " />
                    <GlobalStyles />
                </ThemeProvider >
            </Link>
            <Link to='/' className="btn btn-ghost  hover:text-warning">Home</Link>
            <Link to='/services' className="btn btn-ghost  hover:text-warning">Services</Link>
            <Link to='/faq' className="btn btn-ghost  hover:text-warning">FAQ</Link>
            <Link to='/blog' className="btn btn-ghost  hover:text-warning">Blog</Link>
            <Link to='/notice' className="btn btn-ghost  hover:text-warning">Notice</Link>
            {
                (user?.email) || (user?.uid) ?
                    <>
                        <Link to='/myreviews' className="btn btn-ghost  hover:text-warning">Review</Link>
                        <Link to='/chat'>
                            <button className="btn btn-sm btn-outline btn-warning">
                                MeChat
                            </button>
                        </Link>
                        <Link to='/' className=" hover:text-warning"><button onClick={() => handleLogOut()} className="btn btn-black btn-sm">Log out</button></Link>
                        <Link to='/profile'>
                            <div className="text-xl h-10 w-10">
                                <img src={user?.photoURL} alt='' title={user?.displayName} className='w-10 rounded-full' />
                            </div>
                        </Link>
                    </>
                    :
                    <>
                        <Link to='/login' className="btn btn-ghost  hover:text-warning">Log in</Link>
                        <Link to='/signup' className="btn btn-ghost  hover:text-warning">Sign Up</Link>
                    </>
            }
        </ li >
    </>
    return (
        <div className="navbar w-full">
            <div>
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {menuBar}
                    </ul>
                </div>
                <div className='flex-1 flex-col place-items-center justify-center items-center pr-10'>
                    <div className='flex'>
                        <div className='rounded-full'>
                            <Link to='/'>
                                <img src={logo} alt='logo' />
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className="btn btn-ghost">
                                <span className='lg:text-xl uppercase text-warning lg:font-extrabold'>Lawyer Ghhor</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>
        </div>
    );
};

export default Header;