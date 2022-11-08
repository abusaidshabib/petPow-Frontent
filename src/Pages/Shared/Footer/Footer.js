import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-dark text-white'>
            <Container>
                <div className='row row-cols-2 row-cols-lg-4 py-5 '>
                    <div className="col text-start">
                        <p className='nav-link fw-bold red'>CONTACT US</p>
                        <br />
                        <span className='display-6'>
                            <FaFacebookF /> <FaWhatsapp /> <FaInstagram /> <br /> <FaTwitter /> <FaLinkedinIn />
                        </span>

                    </div>
                    <div className="col text-start">
                        <p className='nav-link fw-bold red'>IMPORTANT</p><br />
                        <Link to="/" className='nav-link fw-bold'>HOME</Link>
                        <br />
                        <Link to="/services" className='nav-link fw-bold'>SERVICES</Link>
                        <br />
                        <Link to="/blog" className='nav-link fw-bold'>BLOG</Link>
                    </div>
                    <div className="col text-start">
                        <p className='nav-link fw-bold red'>FOLLOW US</p><br />
                        <Link to="/" className='nav-link fw-bold'>Facebook</Link>
                        <br />
                        <Link to="/" className='nav-link fw-bold'>Instagram</Link>
                        <br />
                        <Link to="/" className='nav-link fw-bold'>Linkedin</Link>
                    </div>
                    <div className="col text-end">
                        <Link className='text-decoration-none text-white fs-3' to='/'><b>PET<span className='red'>POW</span></b></Link>
                        <p><b>PetPow</b> is best to help about pets and all needs about pets. There are many health benefits of owning a pet. They can increase opportunities to exercise, get outside, and socialize.</p>
                    </div>
                </div>
            </Container>
            <div className="text-center p-4 border-top">
                © 2022 Copyright:
                <Link className="text-reset fw-bold nav-link"> PetPow</Link>
            </div>
        </footer>
    );
};

export default Footer;