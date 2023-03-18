import React from "react";
import "./nav.css"
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.png"

const Nav = () => {
    return (
        <>
            <div className="header-logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className="nav-container">
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/menu" className="nav-item">Menu</Link></li>
                    <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;