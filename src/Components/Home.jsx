import React, { useContext } from 'react';
import Banner from './Banner';
import Visa from './Visa';
import Feature from './Feature';
import CircularGallery from './CircularGallery';
import Partner from './Partner';
import Latestvisa from './Latestvisa';
import Proccess from './Proccess';
import { AuthContext } from '../../Auth/AuthProvider';
import Loading from './Loading';

const Home = () => {
    const {loading} = useContext(AuthContext);
    return (
        <div>
            {loading? <Loading></Loading> : <><Banner></Banner>
            <Visa></Visa>
            <Latestvisa></Latestvisa>
            <Feature></Feature>
            <Proccess></Proccess>
            <Partner></Partner></>}
            
        </div>
    );
};

export default Home;