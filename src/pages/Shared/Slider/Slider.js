import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css'
import  Typewriter  from 'typewriter-effect';
const Slider = () => {
    
    return (
        <div data-theme="night" className=" h-96 bg-base-100">
            <div id="slide1" className="w-full">
                {/* <img src={slide1} className="lg:w-screen" alt='' /> */}
               <Typewriter
               options={{
                strings:`<div class="text-center pt-20">
                <h1 class='text-2xl lg:text-5xl text-bold'>Welcome</h1>
                <h1 class='text-2xl lg:text-5xl text-bold'>To Lawyer Service</h1>
            </div>
            <div class="w-full mx-auto p-5 lg:w-1/2">
                <p class='lg:text-xl text-bold'>There are many services of Legal services of  available in our Lawyer service platform, Your quary,you can check the web</p>
            </div>
            <div class="w-full mx-auto p-5 lg:w-1/2 flex flex-col justify-center items-center">
            <Link class="mx-auto" to="/service"><button class="btn btn-outline rounded-3xl btn-sm px-5">Our Service</button></Link></div>`,
                autoStart:true,
                cursor:"",
                delay:30
               }}/>
            </div>
            <Link to="/"></Link>
        </div>
    )
};

export default Slider;