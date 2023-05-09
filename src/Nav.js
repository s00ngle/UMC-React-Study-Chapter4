import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    return (
        <div className="btn-container">
            <button className="home-btn btn">
                <Link to="/" className="decoration-none">
                    Home
                </Link>
            </button>
            <button className="sub-btn btn">
                <Link to="/sub" className="decoration-none">
                    Sub
                </Link>
            </button>
            <button className="profile-btn btn">
                <Link to={"/profile/:userId"} className="decoration-none">
                    Profile
                </Link>
            </button>
            <button className="about-btn btn">
                <Link to="/about" className="decoration-none">
                    About
                </Link>
            </button>
        </div>
    );
};

export default Nav;
