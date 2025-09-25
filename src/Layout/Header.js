import { useEffect, useState } from 'react';
import '../Frontend/Style/Header.css'
import assets from '../assets/assets'
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navMenu = (
        <>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
            <Link to="/teacher" className={location.pathname === "/teacher" ? "active" : ""}>Teachers</Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
            <Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>Blogs</Link>
            <Link to="/admin/dashboard">Admin</Link>
        </>
    );

    return (
        <>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
                <nav className="nav">
                    {navMenu}
                </nav>
                <div className="icon" onClick={toggleMenu}>
                    {menuOpen ? "✖" : "☰"}
                </div>
            </header>
            {menuOpen && (
                <div className="mobile-menu open">
                    <nav className="mobile-nav">
                        {navMenu}
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header