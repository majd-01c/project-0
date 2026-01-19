import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

/**
 * HomePage Component
 * Main landing page with:
 * - Hero section with empowering message
 * - Emergency hotline prominently displayed
 * - Clear call-to-action buttons
 * - Key benefits
 */
function HomePage() {
  const { t } = useTranslation();

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" aria-label="Welcome section">
        <div className="hero-content">
          <h1>{t('home.title')}</h1>
          <p className="hero-subtitle">
            {t('home.subtitle')}
          </p>

          {/* Emergency Hotline - Very Visible */}
          <div className="emergency-hotline" role="region" aria-label="Emergency hotline">
            <p className="hotline-text">{t('home.emergency')}</p>
            <a href="tel:+21653701678" className="hotline-link">
              📞 {t('home.callNow')}: {t('header.hotlineNumber')}
            </a>
            <p className="hotline-available">{t('home.available247')}</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-illustration">
            <div className="illustration-circle circle-1"></div>
            <div className="illustration-circle circle-2"></div>
            <div className="illustration-circle circle-3"></div>
            <div className="illustration-icon">🤝</div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="why-section" aria-labelledby="why-heading">
        <h2 id="why-heading">{t('home.ourServices')}</h2>
        <p className="section-intro">
          {t('home.mentalHealthDesc')}
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1 in 5</div>
            <p>{t('home.mentalHealthSupport')}</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <p>{t('home.crisisSupportDesc')}</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <p>{t('home.confidentiality')}</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <p>{t('home.hope')}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" aria-labelledby="services-heading">
        <h2 id="services-heading">{t('home.ourServices')}</h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">☎️</div>
            <h3>{t('home.crisisSupport')}</h3>
            <p>{t('home.crisisSupportDesc')}</p>
          </div>

          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>{t('home.mentalHealthSupport')}</h3>
            <p>{t('home.mentalHealthDesc')}</p>
          </div>

          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>{t('home.mentalHealthSupport')}</h3>
            <p>{t('home.mentalHealthDesc')}</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📚</div>
            <h3>{t('home.selfCareTools')}</h3>
            <p>{t('home.selfCareDesc')}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section" aria-labelledby="values-heading">
        <h2 id="values-heading">{t('home.ourValues')}</h2>

        <div className="values-grid">
          <div className="value-item">
            <h3>💚 {t('home.compassion')}</h3>
            <p>{t('home.compassionDesc')}</p>
          </div>

          <div className="value-item">
            <h3>🔒 {t('home.confidentiality')}</h3>
            <p>{t('home.confidentialityDesc')}</p>
          </div>

          <div className="value-item">
            <h3>🤝 {t('home.compassion')}</h3>
            <p>{t('home.compassionDesc')}</p>
          </div>

          <div className="value-item">
            <h3>💪 {t('home.hope')}</h3>
            <p>{t('home.hopeMessage')}</p>
          </div>
        </div>
      </section>

      {/* Hope Message */}
      <section className="hope-section" aria-labelledby="hope-heading">
        <h2 id="hope-heading">{t('home.hope')}</h2>
        <p>
          {t('home.hopeMessage')}
        </p>
        <p>
          {t('home.subtitle')}
        </p>
        <button className="btn-primary btn-large">
          <span className="btn-icon">💬</span> {t('home.connectWithCounselor')}
        </button>
      </section>
    </main>
  );
}

export default HomePage;
