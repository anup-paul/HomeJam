import React from 'react';
import CountUp from 'react-countup';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

const NUmberCounter = () => {
    return (
        <div>
            <div className="d-flex justify-content-center" >
                <div className="row container text-center">
                    <div className="col-md-3 text-white d-flex justify-content-center">

                        <div className="border border-warning rounded-circle p-3" style={{ height: "165px", width: "164px" }}>
                            <div className="d-flex flex-column mt-3">
                                <span className="text-warning" ><FavoriteBorderOutlinedIcon /></span>
                                <span style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}} ><CountUp
                                    start={0}
                                    end={700}
                                    duration={5.75}
                                /></span>
                                <span><p>Likes EveryDay</p></span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 text-white d-flex justify-content-center ">

                        <div className="border border-warning rounded-circle p-3" style={{ height: "165px", width: "164px" }}>
                            <div className=" d-flex flex-column mt-3">
                                <span  className="text-warning" ><AccountBalanceWalletOutlinedIcon /></span>
                                <span style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}} ><CountUp
                                    start={0}
                                    end={650}
                                    duration={5.75}
                                /></span>
                                <span><p>Online Events</p></span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 text-white d-flex justify-content-center ">
                        <div className="border border-warning rounded-circle p-3" style={{ height: "165px", width: "164px" }}>
                            <div className=" d-flex flex-column mt-3">
                                <span  className="text-warning" ><AccountBalanceWalletOutlinedIcon /></span>
                                <span style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}} ><CountUp
                                    start={0}
                                    end={550}
                                    duration={5.75}
                                /></span>
                                <span><p>label</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-white d-flex justify-content-center ">
                        <div className="border border-warning rounded-circle p-3 " style={{ height: "165px", width: "164px" }}>
                            <div className="d-flex flex-column mt-3">
                                <span  className="text-warning" ><AccountBalanceWalletOutlinedIcon /></span>
                                <span  style={{fontSize:"1.3rem", fontWeight:"bold", fontFamily: "'Libre Baskerville', serif"}} ><CountUp
                                    start={0}
                                    end={450}
                                    duration={5.75}
                                /></span>
                                    
                                <span><p  >label</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NUmberCounter;