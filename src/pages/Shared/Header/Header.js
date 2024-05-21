import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { AuthContext } from '../../../Contexts/Context';
// import { GlobalStyles } from '../Theme/Global';
// import { darkTheme, lightTheme } from '../Theme/theme';
import logo from '../../../assets/logo/logo.svg';
import Load from '../Load/Load';


const Header = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) return <Load />
    // console.log(user);
    // const [theme, setTheme] = useState('dark');

    // const toggleTheme = () => {

    //     if (theme === 'dark') {
    //         setTheme('light');
    //     } else {
    //         setTheme('dark');
    //     }
    // }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    const menuBar = <>

        <li><Link>
            {/* <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
                    <input onClick={toggleTheme} type="checkbox" className="toggle toggle-sm " />
                    <GlobalStyles />
                </ThemeProvider > */}
        </Link></li>
        <li><Link to='/' className=" hover:border-b-2 border-gray-300 hover:text-warning">Home</Link></li>
        <li><Link to='/services' className=" hover:border-b-2 border-gray-300 hover:text-warning">Services</Link></li>
        <li><Link to='/notice' className=" hover:border-b-2 border-gray-300 hover:text-warning">Notice</Link></li>
        <li><Link to='/blog' className=" hover:border-b-2 border-gray-300 hover:text-warning">Blog</Link></li>
        <li><Link to='/faq' className=" hover:border-b-2 border-gray-300 hover:text-warning">Faq</Link></li>

        {
            (user?.email) && (user?.uid) ?
                <>
                    <li><Link to='/myreviews' className=" hover:border-b-2 border-gray-300 hover:text-warning">Review</Link></li>
                    <li><Link to='/chat'>
                        MeChat
                    </Link>
                    </li>
                    <li><Link to='/' className=" hover:text-warning"><button onClick={() => handleLogOut()} className="btn btn-black btn-sm">Log out</button></Link></li>
                    <Link to='/profile'>
                        <div className="text-xl h-10 w-10">
                            <img src={user?.photoURL} alt='' title={user?.displayName} className='w-10 rounded-full' />
                        </div>
                    </Link>
                </>
                :
                <>
                    <li><Link to='/login' className=" hover:border-b-2 border-gray-300 hover:text-warning">Log in</Link></li>
                    <li><Link to='/signup' className=" hover:border-b-2 border-gray-300 hover:text-warning">Sign Up</Link></li>
                </>
        }
    </>
    return (
        <div className="z-10 navbar flex justify-between w-full bg-base-300 fixed top-0 h-20">
            <div>
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className=" hover:border-b-2 border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <div>
                    <Link to='/' className="btn rounded-full flex justify-center items-center px-3">
                        <img src={logo} alt='logo' className='w-10 h-10 pb-1' />
                        <span className='md:text-lg text-warning md:font-bold pl-2'>Lawyer Service</span>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>
        </div>
    );
};

export default Header;