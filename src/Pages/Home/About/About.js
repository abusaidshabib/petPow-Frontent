import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div className='py-5 cyanBg'>
            <Container>
                <div class="card mb-3 border-0" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://images.unsplash.com/photo-1508948956644-0017e845d797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80" class="border border-5 border-warning rounded-1 img-fluid" alt="..." />
                        </div>
                        <div class="col-md-8 cyanBg text-white">
                            <div class="card-body">
                                <h5 class="card-title display-4 fw-bold text">What is my inspiration and what about the website?</h5>
                                <p class="card-text lead pb-lg-2">Pet is my one of the best hobby and loving thing. So, that's why I made these services to make a great relation between you and your pets </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default About;