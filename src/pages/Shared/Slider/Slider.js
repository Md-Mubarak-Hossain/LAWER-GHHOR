import React from 'react';

import './Slider.css'
import homeImg from "../../../images/GroupLawer2.png"
import Typewriter from 'typewriter-effect';
const Slider = () => {

    return (
        <div className="bg-base-200 min-h-96 flex lg:flex-row-reverse flex-col-reverse">
           <div className='w-1/2'>
           <Typewriter
                options={{
                    strings: `<div class="w-full">
                <div class="text-center pt-20">
                <h1 class='text-2xl lg:text-5xl text-bold'>Welcome</h1>
                <h1 class='text-2xl lg:text-5xl text-bold'>To Lawyer Service</h1>
                <div class="w-full mx-auto py-5">
                <p class='lg:text-xl text-bold'>There are many services of Legal services of  available in our Lawyer service platform, Your quary,you can check the web</p>
            </div>
            <div class="w-full mx-auto p-5 lg:flex flex-col justify-center items-center">
            <Link class="mx-auto" to="/service"><button class="btn btn-outline rounded-3xl btn-sm px-5">Our Service</button></Link></div>
            </div>
                </div>
            
            `,
                    autoStart: true,
                    cursor: "",
                    delay: 30
                }} />
           </div>
            <div class="w-1/2">
                <img src={homeImg} height={300} alt="home" className='min-h-full'/>
            </div>
        </div>

    )
};

export default Slider;