import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../Api/auth';
import { AuthContext } from '../../../Contexts/Context';
import useTitle from '../../../hooks/useTitle';
const SignUp = () => {
    const { createUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    useTitle('Sign Up');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password, photoURL, name)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                console.log(user, 'signup')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const googleHandle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    const gitHandle = () => {
        gitHubSignIn()
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className="hero min-h-screen w-screen" >
                <div className="hero-content flex-col border-2 border-dotted p-5 md:w-5/12 mx-auto rounded">
                    <h1 className="text-xl font-bold">Sign up here</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full md:px-10">
                        <input type="text" placeholder="name" name="name" className="w-full mx-auto input input-bordered input-sm" />
                        <input type="text" placeholder="PhotoURL" name="photoURL" className="w-full mx-auto input input-bordered input-sm" />
                        <input type="email" placeholder="email" name="email" className="w-full mx-auto input input-bordered input-sm" />
                        <input type="password" placeholder="password" name="password" className="w-full mx-auto input input-bordered input-sm" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <button className="btn btn-primary btn-outline btn-sm">Sign Up</button>
                        <h1><small>already have an account?</small><Link to='/login'><span className='italic'>login</span></Link></h1>
                        <div className='divider'>OR</div>
                        <div className="grid place-items-center">
                            <button onClick={googleHandle} className="btn btn-sm rounded-full btn-outline w-full my-2 text-primary lowercase"><FcGoogle></FcGoogle><span className='pl-2'>Sign in with </span><span className='text-warning'>google</span></button>
                            <button onClick={gitHandle} className="btn btn-sm rounded-full btn-outline w-full my-2 text-primary lowercase"><SiGithub></SiGithub><span className='pl-2'>Sign in with </span><span className='text-warning'>GitHub</span></button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
};

export default SignUp;