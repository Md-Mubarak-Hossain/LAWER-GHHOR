import React from 'react';
const Slider = () => {

    return (
        <div className="carousel w-11/12 m-5 mx-auto h-56 rounded ">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='slider' src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn bg-primary hover:bg-orange-600
btn-circle">❮</a>
                    <a href="#slide2" className="btn bg-primary hover:bg-orange-600
btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='slider' src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-primary hover:bg-orange-600
btn-circle">❮</a>
                    <a href="#slide3" className="btn bg-primary hover:bg-orange-600
btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='slider' src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-primary hover:bg-orange-600
btn-circle">❮</a>
                    <a href="#slide4" className="btn bg-primary hover:bg-orange-600
btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='slider' src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-primary hover:bg-orange-600
btn-circle">❮</a>
                    <a href="#slide1" className="btn bg-primary hover:bg-orange-600
btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;