import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * - Important disclaimer about emergency services
 * - Quick links and additional resources
 * - Contact information
 * - Copyright information
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Emergency Disclaimer</h3>
          <p className="disclaimer">
            ⚠️ <strong>This website does not replace emergency services.</strong> If you are in
            immediate danger, please call emergency services (197 in Tunisia)
            emergency room.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#resources">Crisis Resources</a>
            </li>
            <li>
              <a href="#hotline">24/7 Hotline</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:support@m3ak.com">support@m3ak.com</a>
          </p>
          <p>
            Phone: <a href="tel:+21653701678">+21653701678-HELP-NOW</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} M3ak. All rights reserved. | Dedicated to mental health
          awareness and suicide prevention.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
