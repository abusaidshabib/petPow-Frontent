import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { GiSittingDog } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import firstImg from '../../../assets/heroslider/1.jpg';
import secImg from '../../../assets/heroslider/2.jpg';
import thirImg from '../../../assets/heroslider/3.jpg';
import fourImg from '../../../assets/heroslider/4.jpg';

const HeroSection = () => {
    return (
        <div className="container my-5">
            <div className="row pe-lg-0 pt-lg-5 pb-lg-5 align-items-center rounded-3">
                <div className="col-lg-7 py-3 py-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 darkblue pb-lg-4">Find, Buy, Care your <span className='yellow'>Best Friend <GiSittingDog className='red' /></span>  via me</h1>
                    <p className="lead pb-lg-2">As a pet lover I find many benefit to having a pet. If you are interested then. I will help you to find best pet for you or, find pet depending your needs and learn about how to care them.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to="/services">
                            <button type="button" className="btn btn-warning text-white btn-lg px-4 me-md-2 fw-bold">Our Services</button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 rounded-4 border border-5 border-warning overflow-hidden shadow-lg">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={firstImg}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={secImg}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={thirImg}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fourImg}
                                alt="Four slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;