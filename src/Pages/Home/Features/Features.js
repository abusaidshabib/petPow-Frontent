import React from 'react';
import bgImage from '../../../assets/features.jpg';

const Features = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bgImage} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='pt-5 display-4 fw-bold'>Features</h5>
                        <p className='lead pb-lg-2'><b>PetPow</b> is best to help about pets and all needs about pets. There are many health benefits of owning a pet. They can increase opportunities to exercise, get outside, and socialize.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;