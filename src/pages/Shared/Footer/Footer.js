import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='bg-base-100 flex flex-col'>
            <footer className="footer p-10 text-inherit uppercase">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/services' className="link link-hover">Legal Service</Link>
                    <Link to='/notice' className="link link-hover">Legal Notice</Link>
                </div>
                <div>
                    <span className="footer-title">LAWER GHHOR</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <a href="https://mubarak-world.web.app" className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Other</span>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                    <Link to='/faq' className="link link-hover">Faq</Link>
                </div>
            </footer >
        </div>
    );
};

export default Footer;