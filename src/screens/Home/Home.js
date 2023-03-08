import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Toprated from '../../layout/topRated/Toprated';
import Deal from '../../layout/deal/Deal';
import Shoes from '../../layout/Shoes/Shoes';
import Shipping from '../../layout/Shipping/Shipping';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
        <Navbar />
        <Slider />
        <Toprated />
        <Deal />
        <Shoes />
        <Shipping />
        <Shoes />
        <Footer />

        </div>
    );
}

export default Home;
