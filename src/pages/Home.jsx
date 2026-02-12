import React from 'react';
import Hero from '../components/Hero';
import Disciplines from '../components/Disciplines';
import Schedule from '../components/Schedule';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Disciplines />
            <Schedule />
            <Gallery />
            <Testimonials />
            <Contact />
        </>
    );
}

export default Home;
