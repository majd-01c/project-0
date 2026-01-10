import React from 'react';
import './AboutPage.css';

/**
 * AboutPage Component
 * Information about the organization's mission, values, and approach
 */
function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero">
        <h1>About M3ak</h1>
        <p>Dedicated to saving lives and supporting mental health</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            M3ak is dedicated to preventing suicide and providing compassionate,
            professional psychological support to individuals in emotional distress. We believe
            that every life has value and that mental health support should be accessible to
            everyone, regardless of circumstance.
          </p>
        </div>

        <div className="about-section">
          <h2>Why This Matters</h2>
          <p>
            Mental health conditions like depression, anxiety, and suicidal thoughts are serious
            but treatable. Many people suffer in silence, unsure where to turn or afraid to reach
            out. We're here to break that silence and provide the compassionate care that saves
            lives.
          </p>
          <ul>
            <li>Suicide is a leading cause of death in many age groups</li>
            <li>Many people don't know where to find help when they need it most</li>
            <li>Professional support significantly improves outcomes</li>
            <li>Early intervention and connection can save lives</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Core Values</h2>
          <div className="values-list">
            <div className="value-card">
              <h3>💚 Empathy</h3>
              <p>
                We listen with genuine care and without judgment. Your feelings are valid, and we
                honor your experience.
              </p>
            </div>
            <div className="value-card">
              <h3>🔒 Confidentiality</h3>
              <p>
                Your privacy is sacred. All conversations are strictly confidential and protected
                by professional standards.
              </p>
            </div>
            <div className="value-card">
              <h3>🤝 Respect</h3>
              <p>
                We respect your autonomy, dignity, and unique circumstances. You are the expert
                on your own life.
              </p>
            </div>
            <div className="value-card">
              <h3>💪 Hope</h3>
              <p>
                We believe in your resilience and potential. Even in darkness, there is always
                hope for a better tomorrow.
              </p>
            </div>
            <div className="value-card">
              <h3>🎯 Accessibility</h3>
              <p>
                Support should be available to everyone. We offer multiple ways to connect and
                support different needs.
              </p>
            </div>
            <div className="value-card">
              <h3>📚 Excellence</h3>
              <p>
                Our team consists of licensed, trained professionals committed to the highest
                standards of care.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>How We Approach Support</h2>
          <ol>
            <li>
              <strong>Immediate Response:</strong> 24/7 hotline and chat support for anyone in
              crisis
            </li>
            <li>
              <strong>Active Listening:</strong> We listen without judgment and validate your
              feelings
            </li>
            <li>
              <strong>Professional Assessment:</strong> Our trained team assesses your needs and
              refers to appropriate services
            </li>
            <li>
              <strong>Ongoing Support:</strong> Connect with psychologists for ongoing therapy and
              counseling
            </li>
            <li>
              <strong>Resources & Tools:</strong> Provide educational materials and coping
              strategies
            </li>
            <li>
              <strong>Safety Planning:</strong> Help you develop plans to keep safe during
              difficult times
            </li>
          </ol>
        </div>

        <div className="about-section important-notice">
          <h2>⚠️ Important Notice</h2>
          <p>
            <strong>
              Hope & Support does not replace emergency services. If you are in immediate danger,
              please call 197 or go to your nearest emergency room.
            </strong>
          </p>
          <p>
            We are a support service designed to provide psychological help and resources. For
            life-threatening emergencies, always contact emergency services.
          </p>
        </div>

        <div className="about-section cta-section">
          <h2>Ready to Take the First Step?</h2>
          <p>
            Reaching out is a sign of strength. Connect with us today and let us support you
            through this journey.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large">📞 Call Now: 53701678-HELP-NOW</button>
            <button className="btn-secondary btn-large">💬 Chat with a Psychologist</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
