import React from 'react';
import { Link } from 'react-router-dom';

const Heading=(props)=>{
    return(
        <div className="header">
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <Link id="position" to="/PMTInterface/" className="logo">PMT Interface</Link>   
                </div>                     
            </nav>
        </div>
    );
}

export default Heading;