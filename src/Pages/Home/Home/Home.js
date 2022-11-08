import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import ServiceSection from '../Services/ServiceSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <ServiceSection></ServiceSection>
            <Features></Features>
        </div>
    );
};

export default Home;