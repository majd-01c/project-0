import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';
import m3akLogo from '../assets/images/m3ak-logo.png';

/**
 * Header Component
 * - Navigation menu with links to all pages
 * - M3ak logo prominently displayed
 * - Hotline number prominently displayed
 * - Language switcher for i18n
 * - Accessible navigation structure
 */
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { t } = useTranslation();

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
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link to="/resources" onClick={() => setMenuOpen(false)}>
              {t('nav.resources')}
            </Link>
          </li>
          <li>
            <Link to="/psychologists" onClick={() => setMenuOpen(false)}>
              {t('nav.psychologists')}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        <div className="header-actions">
          <LanguageSwitcher />
          <div className="hotline-badge" aria-label={`Emergency hotline: ${t('header.hotlineNumber')}`}>
            <span className="hotline-label">{t('header.hotline')}:</span>
            <a href="tel:+21653701678" className="hotline-number">
              {t('header.hotlineNumber')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
