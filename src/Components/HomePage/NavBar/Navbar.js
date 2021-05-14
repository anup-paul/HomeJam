import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/image 52.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link className="navbar-brand" ><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active mr-4 text-white" aria-current="page" href="#"> <SearchOutlinedIcon/>  Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mr-4 text-white" aria-current="page" href="#">Help</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mr-4 text-white" aria-current="page" href="#">Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mr-4 text-white" aria-current="page" href="#"><LocalMallOutlinedIcon/></Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;