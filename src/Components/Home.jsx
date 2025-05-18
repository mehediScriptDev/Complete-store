import React from 'react';
import Banner from './Banner';
import Visa from './Visa';
import Feature from './Feature';
import CircularGallery from './CircularGallery';
import Partner from './Partner';
import Latestvisa from './Latestvisa';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Visa></Visa>
            <Latestvisa></Latestvisa>
            <Feature></Feature>
            <Partner></Partner>
        </div>
    );
};

export default Home;