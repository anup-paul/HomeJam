import React from 'react';
import NUmberCounter from '../NumberCounter/NUmberCounter';


const Header = () => {
    return (
        <div className="header-container " >
            <div className="d-flex justify-content-center align-items-center h-75">
                <div className="row  container" >
                    <div className="col-md-5">
                        <h1 style={{ fontSize: "80px", fontFamily: "'Libre Baskerville', serif" }} className="text-white">Cari Cari</h1>
                        <p className="text-white" >Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
                    </div>
                </div>
            </div>
           
               <NUmberCounter></NUmberCounter>
            
        </div>
    );
};

export default Header;