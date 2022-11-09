import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Context';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import useTitle from '../../../hooks/useTitle';
const Login = () => {
    useTitle('Login');
    const { user, logIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                console.log(user)
                navigate(from, { replace: true });
                return alert('Successfully log in!!!');
            })
            .catch(err => {
                setError('User or Password is invalid!!!')
                console.error(err)
            })


    }
    const googleHandle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    const gitHandle = () => {
        gitHubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full">
            <div className="hero-content w-full" >
                <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl ">
                    <div className="card-body lg:w-full">
                        <h2 className='font-extrabold lg:text-5xl uppercase underline decoration-wavy decoration-pink-500'>Please Log in now.</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col lg:w-full border-opacity-50">
                            <div className="grid place-items-center w-full">

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder=" email" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full" />
                                    <p className='text-red-800 text-sm'>{error}</p>
                                </div>
                                <div className="form-control mt-5 w-full">
                                    <button className="btn btn-outline w-full ">Log in</button>
                                </div>
                            </div>
                            <div className="divider">OR</div>
                        </form>
                        <div className="grid place-items-center">
                            <button onClick={googleHandle} className="btn btn-outline w-full my-2 text-primary lowercase"><FcGoogle></FcGoogle><span className='pl-2'>Sign in with </span><span className='text-warning'>google</span></button>
                            <button onClick={gitHandle} className="btn btn-outline w-full my-2 text-primary lowercase"><SiGithub></SiGithub><span className='pl-2'>Sign in with </span><span className='text-warning'>GitHub</span></button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;