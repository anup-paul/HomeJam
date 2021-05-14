import React from 'react';
import img1 from '../../../images/m6.png';
import img2 from '../../../images/m2.png';
import img3 from '../../../images/m3.png';
import img4 from '../../../images/m4.png';
import UpcommingShowsData from './UpcommingShowsData';


const showsData = [
    {
        id:1,
        img:img1,
        name: 'Bennay Dayal',
        title: 'Folk',
    },
    {
        id:2,
        img:img2,
        name: 'Vijay Yesudas',
        title: 'Bollwood'
    },
    {
        id:3,
        img:img3,
        name: 'Andrea Jeremiah',
        title: 'Folk'
    },
    {
        id:4,
        img:img4,
        name: 'Shilpa Rao',
        title: 'Folk'
    }
]

const UpCommingShow = () => {
    return (
        <div className="infoBackGround" >
            <div className="d-flex justify-content-between container" >
                <h3 className="text-white mt-3 after__border my-4" style={{fontFamily: "'Libre Baskerville', serif"}} >Upcomming Shows</h3>
                <button className="text-warning btn mt-3" >View All</button>
            </div>
            <div className="d-flex justify-content-center container" >
                <div className="row">
                    {
                        showsData.map(data =><UpcommingShowsData data={data} ></UpcommingShowsData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpCommingShow;