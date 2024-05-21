import React from 'react';
import './Slider.css'
import homeImg from "../../../images/GroupLawer2.png"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
const Slider = () => {

    return (
        <div className="bg-base-200 min-h-96 flex md:flex-row-reverse flex-col-reverse h-screen relative">
            <div className='w-1/2'>
                <div className="w-full">
                    <div className="w-4/5 text-center flex flex-col justify-center items-center w-full h-screen">
                        <Typewriter
                            options={{
                                strings: `
                <h1 class='text-2xl text-bold'>Welcome</h1>
                <h1 class='text-2xl text-bold'>To Lawyer Service</h1>
                <div class="w-full mx-auto py-5">
                <p class='text-sm text-bold'>There are many services of Legal services of  available in our Lawyer service platform, Your quary,you can check the web</p></div>
                <div class="w-full mx-auto p-5 md:flex flex-col justify-center items-center">
                </div>`,
                                autoStart: true,
                                cursor: "",
                                delay: 30
                            }} />
            <Link id='myAin' to={`/services`} className='btn btn-sm rounded-full text-primary'>See our services
                    </Link >
                    </div>
                </div>
            </div>
            <div className="w-1/2 absolute bottom-0 left-0">
                <img src={homeImg} height={300} alt="home" className='min-h-screen' />
            </div>
        </div>

    )
};

export default Slider;