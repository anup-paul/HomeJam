import React from 'react';
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import Review from './Rreview/Review';
import UpCommingShow from './UpCommingShow/UpCommingShow';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <UpCommingShow></UpCommingShow>
            <Review></Review>
        </div>
    );
};

export default HomePage;