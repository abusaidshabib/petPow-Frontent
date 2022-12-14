import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hook/useTitle';
import About from '../About/About';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import ServiceSection from '../Services/ServiceSection';

const Home = () => {
    useTitle("home");
    const services = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <ServiceSection services={services}></ServiceSection>
            <Features></Features>
        </div>
    );
};

export default Home;