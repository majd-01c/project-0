import React from 'react';
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
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" aria-label="Welcome section">
        <div className="hero-content">
          <h1>You Are Not Alone</h1>
          <p className="hero-subtitle">
            We're here to help. Connect with compassionate professionals and find support when you
            need it most.
          </p>

          {/* Emergency Hotline - Very Visible */}
          <div className="emergency-hotline" role="region" aria-label="Emergency hotline">
            <p className="hotline-text">In crisis right now?</p>
            <a href="tel:+21653701678" className="hotline-link">
              📞 Call Now: 53701678-HELP-NOW
            </a>
            <p className="hotline-available">Available 24/7</p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary btn-large" aria-label="Call now for immediate help">
              <span className="btn-icon">📞</span> Call Now
            </button>
            <button className="btn-secondary btn-large" aria-label="Chat with a psychologist">
              <span className="btn-icon">💬</span> Chat with a Psychologist
            </button>
            <button className="btn-outline btn-large" aria-label="Get help and resources">
              <span className="btn-icon">📚</span> Get Help
            </button>
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
        <h2 id="why-heading">Why We Exist</h2>
        <p className="section-intro">
          Suicide is a complex issue affecting millions worldwide. Our mission is to provide
          immediate support, compassionate care, and professional guidance to those struggling.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1 in 5</div>
            <p>Adults experience mental illness annually</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <p>Professional support available anytime</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <p>Confidential and judgment-free</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <p>Your life has unlimited potential</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" aria-labelledby="services-heading">
        <h2 id="services-heading">How We Help</h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">☎️</div>
            <h3>24/7 Hotline</h3>
            <p>Immediate support from trained professionals available around the clock.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>Chat Support</h3>
            <p>Confidential conversations with psychologists via secure messaging.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>Professional Counseling</h3>
            <p>One-on-one sessions with licensed psychologists and therapists.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📚</div>
            <h3>Resources & Tools</h3>
            <p>Educational materials, coping strategies, and crisis management guides.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section" aria-labelledby="values-heading">
        <h2 id="values-heading">Our Core Values</h2>

        <div className="values-grid">
          <div className="value-item">
            <h3>💚 Empathy</h3>
            <p>We listen without judgment and validate your feelings and experiences.</p>
          </div>

          <div className="value-item">
            <h3>🔒 Confidentiality</h3>
            <p>Your privacy and trust are sacred. All conversations are completely confidential.</p>
          </div>

          <div className="value-item">
            <h3>🤝 Respect</h3>
            <p>We honor your dignity and autonomy in every interaction.</p>
          </div>

          <div className="value-item">
            <h3>💪 Hope</h3>
            <p>We believe in your resilience and potential for a better tomorrow.</p>
          </div>
        </div>
      </section>

      {/* Hope Message */}
      <section className="hope-section" aria-labelledby="hope-heading">
        <h2 id="hope-heading">There is Always Hope</h2>
        <p>
          Whatever you're going through, you don't have to face it alone. Reaching out is a sign
          of strength, not weakness. Our trained professionals are here to support you every step of
          the way.
        </p>
        <p>
          Your life has value. Your feelings matter. And you deserve support and compassion during
          your darkest moments.
        </p>
        <button className="btn-primary btn-large">
          <span className="btn-icon">💬</span> Start Conversation Now
        </button>
      </section>
    </main>
  );
}

export default HomePage;
