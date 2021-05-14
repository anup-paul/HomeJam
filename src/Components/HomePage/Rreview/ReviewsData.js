import React from 'react';

const ReviewsData = ({ data }) => {
    return (
        <div className="col-md-4 mb-5 " >
            <div class="card review-card-design border border-warning " style={{ width: "22rem", backgroundColor: "rgb(9, 2, 24)", }}>
                <div class="card-body">
                    <div className="d-flex">
                        <div>
                            <img src={data.img} alt="" />
                        </div>
                        <div className="ml-4" >
                            <h6 class="card-subtitle mb-2 text-muted">{data.name}</h6>
                            <div className="d-flex" >
                                <img src={data.countryFlag} alt="" />
                                <span className="text-warning ml-2" >{data.countryName}</span>
                            </div>
                        </div>
                    </div>

                    <p class="card-text mt-3 text-white">{data.description}</p>

                </div>
            </div>

        </div>
    );
};

export default ReviewsData;