import React from 'react';
import slide1 from '../../../assets/images/slide2.jpg';
import slide2 from '../../../assets/images/slide1.jpg';
import slide3 from '../../../assets/images/slide3.jpg';
import './Slider.css'
const Slider = () => {
    const bannerText = <>
        <div className="absolute  justify-end transform -translate-y-1/2 left-5  top-1/4 ml-6 pl-6 ">
            <h1 className='text-2xl lg:text-5xl text-white text-bold'>Helpfull</h1>
            <h1 className='text-2xl lg:text-5xl text-white text-bold'>Lawyer Ghhor</h1>
        </div>
        <div className="absolute  justify-end transform -translate-y-1/2 left-2 lg:left-5  top-3/4 ml-3 lg:ml-6 pl-2 lg:pl-6 w-3/4 lg:w-1/2">
            <p className='lg:text-xl text-bold text-white'>There are many services of Legal services of  available in our Lawyer ghhor, Your quary,you can check the web</p>
        </div>
    </>
    return (
        <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full containerImg ">
                <img src={slide1} className="w-screen" alt='' />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mx-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full containerImg">
                <img src={slide2} className="w-screen max-h-full" alt='' />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mx-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full containerImg">
                <img src={slide3} className="w-screen max-h-full" alt='' />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mx-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div >)
};

export default Slider;