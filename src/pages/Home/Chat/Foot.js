import React, { useContext } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
const Foot = () => {
    const { logOut } = useContext(AuthContext)
    const logout = () => {
        logOut()
            .then(() => { })
    }
    return (
        <div className='w-full'>
            <div className='card-body'>
                <Link> <button onClick={() => logout()}><BiLogOutCircle></BiLogOutCircle></button></Link>
            </div>
        </div >
    );
};

export default Foot;