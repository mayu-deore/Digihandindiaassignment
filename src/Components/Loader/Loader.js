import React from "react";
import "./Loader.css";
import { Circles } from "react-loader-spinner";
import { Link } from 'react-router-dom';

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-content">
                <Circles
                    height="170"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <h4>Oops..!!!</h4>
                <h5>Something Went Wrong</h5>
                <Link  to="/home" className="link-without-decoration">GoToHomePage</Link>
            </div>
        </div>
    );
};

export default Loader;
