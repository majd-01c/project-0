import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

/**
 * Footer Component
 * - Important disclaimer about emergency services
 * - Quick links and additional resources
 * - Contact information
 * - Copyright information
 */
function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footer.disclaimer')}</h3>
          <p className="disclaimer">
            ⚠️ <strong>{t('footer.disclaimerText')}</strong>
          </p>
        </div>

        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li>
              <a href="#resources">{t('nav.resources')}</a>
            </li>
            <li>
              <a href="#hotline">{t('header.hotline')}</a>
            </li>
            <li>
              <a href="#privacy">{t('footer.privacyPolicy')}</a>
            </li>
            <li>
              <a href="#terms">{t('footer.termsOfService')}</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('footer.contactUs')}</h3>
          <p>
            {t('footer.emailLabel')}: <a href="mailto:support@m3ak.com">{t('footer.email')}</a>
          </p>
          <p>
            {t('footer.phoneLabel')}: <a href="tel:+21653701678">{t('header.hotlineNumber')}</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>{t('footer.followUs')}</h3>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                {t('footer.twitter')}
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                {t('footer.facebook')}
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                {t('footer.instagram')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {t('footer.copyright')} | {t('footer.dedicatedTo')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
