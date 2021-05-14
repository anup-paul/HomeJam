import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const UpcommingShowsData = ({ data }) => {
    return (
        <div className="col-md-3 c" >
            <div className="m-4" >
            <div class="card p-2 card-design" style={{ width: "15rem", backgroundColor: "#111229" }}>
                
                    <img src={data.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <button href="/" class="btn-sm btn-warning ">{data.title}</button>
                        <h5 class="card-title text-white my-3">{data.name}</h5>
                        <div className="d-flex  justify-content-between">
                            <span className="text-primary" >More Info<ArrowRightAltIcon /> </span>
                            <span className="text-primary" ><ContactMailIcon /></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcommingShowsData;