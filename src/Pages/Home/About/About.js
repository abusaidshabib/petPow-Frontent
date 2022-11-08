import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div className='py-5 cyanBg'>
            <Container>
                <div className="card mb-3 border-0" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1508948956644-0017e845d797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80" className="border border-5 border-warning rounded-1 img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8 cyanBg text-white">
                            <div className="card-body">
                                <h5 className="card-title display-4 fw-bold">What is my inspiration and what about the website?</h5>
                                <p className="card-text lead pb-lg-2">Pet is my one of the best hobby and loving thing. So, that's why I made these services to make a great relation between you and your pets. Here I will choose your pets which best for you and also help to provide accessories for your best friend. Doctors and other take caring things also provided by me.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default About;