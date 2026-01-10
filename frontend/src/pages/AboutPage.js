import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';

/**
 * AboutPage Component
 * Information about the organization's mission, values, and approach
 */
function AboutPage() {
  const { t } = useTranslation();

  return (
    <main id="main-content">
      <section className="about-hero">
        <h1>{t('about.title')}</h1>
        <p>{t('about.subtitle')}</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>{t('about.ourMission')}</h2>
          <p>
            {t('about.missionStatement')}
          </p>
        </div>

        <div className="about-section">
          <h2>{t('about.whyMatters')}</h2>
          <p>
            {t('about.whyMattersText')}
          </p>
          <ul>
            <li>{t('about.whyMattersBullet1')}</li>
            <li>{t('about.whyMattersBullet2')}</li>
            <li>{t('about.whyMattersBullet3')}</li>
            <li>{t('about.whyMattersBullet4')}</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>{t('about.ourValues')}</h2>
          <div className="values-list">
            <div className="value-card">
              <h3>💚 {t('about.value1')}</h3>
              <p>{t('about.value1Desc')}</p>
            </div>
            <div className="value-card">
              <h3>🔒 {t('about.value2')}</h3>
              <p>{t('about.value2Desc')}</p>
            </div>
            <div className="value-card">
              <h3>🤝 {t('about.value3')}</h3>
              <p>{t('about.value3Desc')}</p>
            </div>
            <div className="value-card">
              <h3>💪 {t('about.value4')}</h3>
              <p>{t('about.value4Desc')}</p>
            </div>
            <div className="value-card">
              <h3>🎯 {t('about.value5')}</h3>
              <p>{t('about.value5Desc')}</p>
            </div>
            <div className="value-card">
              <h3>📚 {t('about.value6')}</h3>
              <p>{t('about.value6Desc')}</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>{t('about.howWeApproach')}</h2>
          <ol>
            <li>
              <strong>{t('about.approach1Title')}:</strong> {t('about.approach1Desc')}
            </li>
            <li>
              <strong>{t('about.approach2Title')}:</strong> {t('about.approach2Desc')}
            </li>
            <li>
              <strong>{t('about.approach3Title')}:</strong> {t('about.approach3Desc')}
            </li>
            <li>
              <strong>{t('about.approach4Title')}:</strong> {t('about.approach4Desc')}
            </li>
            <li>
              <strong>{t('about.approach5Title')}:</strong> {t('about.approach5Desc')}
            </li>
            <li>
              <strong>{t('about.approach6Title')}:</strong> {t('about.approach6Desc')}
            </li>
          </ol>
        </div>

        <div className="about-section important-notice">
          <h2>⚠️ {t('about.importantNotice')}</h2>
          <p>
            <strong>{t('about.importantNoticeText')}</strong>
          </p>
          <p>{t('about.importantNoticeSecond')}</p>
        </div>

        <div className="about-section cta-section">
          <h2>{t('about.readyToStart')}</h2>
          <p>{t('about.readyToStartText')}</p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large">📞 {t('about.callNow')}</button>
            <button className="btn-secondary btn-large">💬 {t('about.chatWithPsy')}</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
