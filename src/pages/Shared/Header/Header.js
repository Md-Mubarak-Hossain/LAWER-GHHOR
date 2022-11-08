import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex mx-5 bg-black text-white h-32'>
            <div><Link>header</Link></div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/signup'>Sign Up</Link></div>
        </div >
    );
};

export default Header;