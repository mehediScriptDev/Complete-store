import React from 'react';
import Banner from './Banner';
import Visa from './Visa';
import Feature from './Feature';
import CircularGallery from './CircularGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Visa></Visa>
            <Feature></Feature>
            <CircularGallery></CircularGallery>
        </div>
    );
};

export default Home;