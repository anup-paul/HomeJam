import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import img1 from '../../../images/Img (1).png';
import img2 from '../../../images/Img (2).png';
import img3 from '../../../images/Img (3).png';
import ReviewsData from './ReviewsData';
import flag1 from '../../../images/united-kingdom (1).png';
import flag2 from '../../../images/united-states.png';
import flag3 from '../../../images/germany.png';

const reviewsInfo = [
    {
        id: 1,
        name: 'Hallen Jummy',
        countryName: 'Bangaladesh',
        countryFlag:flag1,
        img: img1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit maxime doloribus at praesentium harum in pariatur nihil ut quo.'
    },
    {
        id: 1,
        name: 'Hallen Jummy',
        countryName: 'Bangaladesh',
        countryFlag:flag2,
        img: img2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit maxime doloribus at praesentium harum in pariatur nihil ut quo.'
    },
    {
        id: 1,
        name: 'Hallen Jummy',
        countryName: 'Bangaladesh',
        countryFlag:flag3,
        img: img3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit maxime doloribus at praesentium harum in pariatur nihil ut quo.'
    }
]


const Review = () => {
    return (
        <div className="infoBackGround" >
            <div className="d-flex justify-content-between container" >
                <h3 className="text-white mt-3 after__border my-4" style={{fontFamily: "'Libre Baskerville', serif"}} >Reviews</h3>
                <button className="text-warning btn mt-3" >1/2  <ArrowBackIcon /> <ArrowForwardIcon /> </button>
            </div>
            <div className="d-flex justify-content-center container">
                <div className="row my-3">
                    {
                        reviewsInfo.map(data => <ReviewsData data={data} ></ReviewsData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;