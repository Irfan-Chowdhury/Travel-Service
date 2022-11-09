import React from 'react';
import useTitle from '../../hooks/useTitle';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {

    useTitle('Home');


    return (
        <main>
            <Slider></Slider>
            <Services></Services>
        </main>
    );
};

export default Home;