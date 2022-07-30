import React, { useState } from "react";
import Relax from "../Assets/Relax.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../Styles/Navbar.css"

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Relax} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="about">About Us</Link>
                    <Link to="services">Services</Link>
                    <Link to="contact">Contact Us</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="about">About Us</Link>
                <Link to="services">Services</Link>
                <Link to="contact">Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;