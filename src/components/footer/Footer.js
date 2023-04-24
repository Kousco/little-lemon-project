import './footer.css'
import footerLogo from '../assets/logo3.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <>
                <img src={footerLogo} alt="Little Lemon Logo" />
            </>
            <nav>
                <h2><u>Doormat Navigation</u></h2>
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/menu" className="nav-item">Menu</Link></li>
                    <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </nav>
            <nav>
                <h2>Contact</h2>
                <ul>
                    <li><a>567 FakeStreetName Street</a></li>
                    <li><a>(123)456-7890</a></li>
                    <li><a>LittleLemon@gmail.com</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;