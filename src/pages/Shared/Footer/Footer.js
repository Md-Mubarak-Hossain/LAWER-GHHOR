import React from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.svg';
const Footer = () => {

    return (
        <div className='bg-base-300 flex flex-col'>
            <footer className="footer p-10 text-inherit">
            <div className='flex-1 flex-col place-items-center justify-center items-center pr-10'>
                    <div className='inline-flex justify-center items-center'>
                        <div className='rounded-full'>
                            <Link to='/'>
                                <img src={logo} alt='logo' />
                            </Link>
                        </div>
                        <div className="px-2 inline-flex justify-center items-center">
                            <Link to='/' className="hover:border-b-2 border-gray-300">
                                <span className='lg:text-2xl text-warning lg:font-extrabold'>Lawyer Service</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/services' className="link link-hover">Legal Service</Link>
                    <Link to='/notice' className="link link-hover">Legal Notice</Link>
                </div>
                <div>
                    <span className="footer-title">Lawyer Service</span>
                    <Link href='mailto:hossainmubarak477@gmail.com' className="link link-hover">Email</Link>
                    <a href="https://mubarak-world.web.app" className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Other</span>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                    <Link to='/faq' className="link link-hover">Faq</Link>
                </div>
            </footer >
            <section data-theme="synthwave" className="bg-base-300">
                    <div className="container px-8 py-10 mx-auto flex items-center md:flex-row flex-col">
                        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">Hacker Rank</h2>
                            <h1 className="md:text-3xl text-2xl font-medium title-font ">We serve the services with trust.</h1>
                        </div>
                        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                            <button className="bg-base-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-base-200 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs mb-1">GET IT ON</span>
                                    <span className="title-font font-medium">Google Play</span>
                                </span>
                            </button>
                            <button className="bg-base-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-base-200 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                </svg>
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs mb-1">Download on the</span>
                                    <span className="title-font font-medium">App Store</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
                <div data-theme="night" className="bg-base-300">
                    <div className="container mx-auto py-4 px-8 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-sm text-center sm:text-left">© 2021 Lawyer Service —
                            <Link to="/" rel="noopener noreferrer" className=" ml-1" target="_blank">@LawyerService</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <ExternalLink href='https://www.facebook.com/www.mdmubarak' className="">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </ExternalLink>
                            {/* twitter */}
                            <ExternalLink href='https://twitter.com/Mubarak6632' className="ml-3 ">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </ExternalLink>
                            {/* instagram */}
                            <ExternalLink href='https://www.instagram.com/mdmubarak8100/' className="ml-3 ">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </ExternalLink>
                            {/* linkedin */}
                            <ExternalLink href='https://www.linkedin.com/in/mubarak-hossain/' className="ml-3 ">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-7 h-7" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </ExternalLink>
                        </span>
                    </div>
                </div>
        </div>
    );
};

export default Footer;