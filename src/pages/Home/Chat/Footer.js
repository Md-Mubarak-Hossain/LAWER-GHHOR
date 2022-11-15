import React, { useContext } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
const Footer = () => {
    const { logOut } = useContext(AuthContext)
    return (
        <div className='card w-full'>
            <div className='card-body'>
                <Link to='/'> <button onClick={logOut}><BiLogOutCircle></BiLogOutCircle></button></Link>
            </div>
        </div>
    );
};

export default Footer;