import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

/**
 * ContactPage Component
 * Emergency contact information and support form
 */
function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main id="main-content">
      <section className="contact-hero">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>
      </section>

      <div className="contact-content">
        {/* Emergency Alert */}
        <section className="emergency-alert">
          <h2>🚨 {t('contact.emergency')}</h2>
          <p>
            <strong>{t('contact.emergencyCall')}</strong>
          </p>
          <p>{t('contact.emergencyDescription')}</p>
        </section>

        {/* Contact Methods Grid */}
        <section className="contact-methods">
          <h2>{t('contact.waysToReach')}</h2>

          <div className="methods-grid">
            <div className="method-card emergency">
              <div className="method-icon">📞</div>
              <h3>{t('contact.hotline')}</h3>
              <p className="method-description">{t('contact.hotlineDesc')}</p>
              <a href="tel:+21653701678" className="method-link">
                {t('contact.hotlineNumber')}
              </a>
              <p className="availability">{t('contact.available247')}</p>
            </div>

            <div className="method-card">
              <div className="method-icon">💬</div>
              <h3>{t('contact.whatsapp')}</h3>
              <p className="method-description">{t('contact.whatsappDesc')}</p>
              <a href="https://wa.me/21653701678" className="method-link">{t('contact.whatsappLink')}</a>
              <p className="availability">{t('contact.whatsappAvail')}</p>
            </div>

            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>{t('contact.email')}</h3>
              <p className="method-description">{t('contact.emailDesc')}</p>
              <a href="mailto:support@m3ak.com" className="method-link">
                {t('contact.emailAddress')}
              </a>
              <p className="availability">{t('contact.emailResponse')}</p>
            </div>

            <div className="method-card">
              <div className="method-icon">💻</div>
              <h3>{t('contact.liveChat')}</h3>
              <p className="method-description">{t('contact.liveChatDesc')}</p>
              <button className="method-link" style={{ background: 'none', border: 'none', padding: 0 }}>
                {t('contact.liveChatStart')}
              </button>
              <p className="availability">{t('contact.liveChatAvail')} </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>{t('contact.sendMessage')}</h2>
          <p>{t('contact.formDescription')}</p>

          {submitted ? (
            <div className="success-message">
              <h3>✓ {t('contact.messageReceived')}</h3>
              <p>{t('contact.thankYou')}</p>
              <p>{t('contact.crisisPrompt')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contact.formName')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label={t('contact.formName')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.formEmail')} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label={t('contact.formEmail')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('contact.formPhone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label={t('contact.formPhone')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.formMessage')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.formPlaceholder')}
                  aria-label={t('contact.formMessage')}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-large">
                {t('contact.sendButton')}
              </button>
            </form>
          )}
        </section>

        {/* Support Options */}
        <section className="support-options">
          <h2>{t('contact.otherWays')}</h2>

          <div className="options-grid">
            <div className="option-card">
              <h3>👥 {t('contact.option1Title')}</h3>
              <p>{t('contact.option1Desc')}</p>
            </div>

            <div className="option-card">
              <h3>📚 {t('contact.option2Title')}</h3>
              <p>{t('contact.option2Desc')}</p>
            </div>

            <div className="option-card">
              <h3>🧘 {t('contact.option3Title')}</h3>
              <p>{t('contact.option3Desc')}</p>
            </div>

            <div className="option-card">
              <h3>👨‍⚕️ {t('contact.option4Title')}</h3>
              <p>{t('contact.option4Desc')}</p>
            </div>

            <div className="option-card">
              <h3>🏥 {t('contact.option5Title')}</h3>
              <p>{t('contact.option5Desc')}</p>
            </div>

            <div className="option-card">
              <h3>🌍 {t('contact.option6Title')}</h3>
              <p>{t('contact.option6Desc')}</p>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="legal-section">
          <h2>{t('contact.importantInfo')}</h2>

          <div className="legal-cards">
            <div className="legal-card">
              <h3>⚠️ {t('contact.legal1Title')}</h3>
              <p>{t('contact.legal1Desc')}</p>
            </div>

            <div className="legal-card">
              <h3>📋 {t('contact.legal2Title')}</h3>
              <p>{t('contact.legal2Desc')}</p>
            </div>

            <div className="legal-card">
              <h3>⚕️ {t('contact.legal3Title')}</h3>
              <p>{t('contact.legal3Desc')}</p>
            </div>

            <div className="legal-card">
              <h3>🔒 {t('contact.legal4Title')}</h3>
              <p>{t('contact.legal4Desc')}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="contact-faq">
          <h2>{t('contact.faqTitle')}</h2>

          <div className="faq-items">
            <details className="faq-item">
              <summary>{t('contact.faq1Question')}</summary>
              <p>{t('contact.faq1Answer')}</p>
            </details>

            <details className="faq-item">
              <summary>{t('contact.faq2Question')}</summary>
              <p>{t('contact.faq2Answer')}</p>
            </details>

            <details className="faq-item">
              <summary>{t('contact.faq3Question')}</summary>
              <p>{t('contact.faq3Answer')}</p>
            </details>

            <details className="faq-item">
              <summary>{t('contact.faq4Question')}</summary>
              <p>{t('contact.faq4Answer')}</p>
            </details>

            <details className="faq-item">
              <summary>{t('contact.faq5Question')}</summary>
              <p>{t('contact.faq5Answer')}</p>
            </details>
          </div>
        </section>

        {/* Final Message */}
        <section className="final-message">
          <h2>{t('contact.finalTitle')}</h2>
          <p>{t('contact.finalMessage')}</p>
          <p>
            <strong>{t('contact.finalCta')}</strong>
          </p>
          <a href="tel:+21653701678" className="btn-primary btn-large">
            📞 {t('contact.callNow')}
          </a>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
