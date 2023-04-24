import { useEffect, useState } from "react";
import "./nav.css"
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.png"
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'


const Nav = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isCross, setIsCross] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIsCross(!isCross);
    }

    useEffect (() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="header-logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className="nav-container">
                <div className="hamburger-icon-box">
                    {isCross ? (
                        <RxCross2 onClick={toggleMenu} className="hamburger-icon" />
                    ) : (
                        <RxHamburgerMenu onClick={toggleMenu} className="hamburger-icon" />
                    )}
                </div>
                {windowWidth > 550 || showMenu ? (
                    <ul>
                        <li><Link to="/" className="nav-item">Home</Link></li>
                        <li><Link to="/about" className="nav-item">About</Link></li>
                        <li><Link to="/menu" className="nav-item">Menu</Link></li>
                        <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                        <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                        <li><Link to="/login" className="nav-item">Login</Link></li>
                    </ul>
                ) : null}
                <hr/>
            </nav>
        </>
    )
}

export default Nav;