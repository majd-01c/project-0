import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import m3akLogo from '../assets/images/m3ak-logo.png';

/**
 * Header Component
 * - Navigation menu with links to all pages
 * - M3ak logo prominently displayed
 * - Hotline number prominently displayed
 * - Accessible navigation structure
 */
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="header" role="banner">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="M3ak - Home">
          <img 
            src={m3akLogo}
            alt="M3ak Logo" 
            className="logo-image"
          />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/resources" onClick={() => setMenuOpen(false)}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="/psychologists" onClick={() => setMenuOpen(false)}>
              Psychologists
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="hotline-badge" aria-label="Emergency hotline: 53701678-HELP-NOW">
          <span className="hotline-label">24/7 Hotline:</span>
          <a href="tel:+21653701678" className="hotline-number">
            53701678-HELP-NOW
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
