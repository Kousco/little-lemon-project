import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <>
                <img alt="Little Lemon Logo" />
            </>
            <nav>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
            <nav>
                <h2>Contact</h2>
                <ul>

                    <li><a>Address</a></li>
                    <li><a>Phone number</a></li>
                    <li><a>Email</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;