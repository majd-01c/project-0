import React, { useState } from 'react';
import './ContactPage.css';

/**
 * ContactPage Component
 * Emergency contact information and support form
 */
function ContactPage() {
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
        <h1>Contact & Emergency Support</h1>
        <p>Multiple ways to reach us when you need help</p>
      </section>

      <div className="contact-content">
        {/* Emergency Alert */}
        <section className="emergency-alert">
          <h2>🚨 In a Life-Threatening Emergency?</h2>
          <p>
            <strong>Call 190 (SAMU) or go to your nearest Emergency Room immediately.</strong>
          </p>
          <p>This website provides psychological support but is not a substitute for emergency services.</p>
        </section>

        {/* Contact Methods Grid */}
        <section className="contact-methods">
          <h2>Ways to Reach Us</h2>

          <div className="methods-grid">
            <div className="method-card emergency">
              <div className="method-icon">📞</div>
              <h3>24/7 Hotline</h3>
              <p className="method-description">Call immediately for crisis support</p>
              <a href="tel:+21653701678" className="method-link">
                National Psychological Assistance: 53701678
              </a>
              <p className="availability">Available 24 hours, 7 days a week</p>
            </div>

            <div className="method-card">
              <div className="method-icon">💬</div>
              <h3>WhatsApp Support</h3>
              <p className="method-description">Chat when you can't talk on the phone</p>
              <a href="https://wa.me/21653701678" className="method-link">Message via WhatsApp</a>
              <p className="availability">Available 24/7, free and confidential</p>
            </div>

            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>Email Support</h3>
              <p className="method-description">Non-emergency email support</p>
              <a href="mailto:support@m3ak.com" className="method-link">
                support@m3ak.com
              </a>
              <p className="availability">Response within 24 hours</p>
            </div>

            <div className="method-card">
              <div className="method-icon">💻</div>
              <h3>Live Chat</h3>
              <p className="method-description">Connect with a counselor online</p>
              <button className="method-link" style={{ background: 'none', border: 'none', padding: 0 }}>
                Start Chat Now
              </button>
              <p className="availability">Available 9 AM - 11 PM </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <p>
            Have a question or need more information? Fill out the form below and we'll get back to
            you as soon as possible.
          </p>

          {submitted ? (
            <div className="success-message">
              <h3>✓ Message Received</h3>
              <p>Thank you for reaching out. We'll respond as soon as possible.</p>
              <p>If you're in crisis, please call our hotline: 8010 5050</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label="Your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  aria-label="Your message"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-large">
                Send Message
              </button>
            </form>
          )}
        </section>

        {/* Support Options */}
        <section className="support-options">
          <h2>Other Ways We Can Help</h2>

          <div className="options-grid">
            <div className="option-card">
              <h3>👥 Support Groups</h3>
              <p>Join peer support groups where you can connect with others going through similar experiences.</p>
            </div>

            <div className="option-card">
              <h3>📚 Educational Resources</h3>
              <p>Learn more about mental health, warning signs, and coping strategies through our resource library.</p>
            </div>

            <div className="option-card">
              <h3>🧘 Self-Care Tools</h3>
              <p>Access guided meditations, breathing exercises, and wellness resources at any time.</p>
            </div>

            <div className="option-card">
              <h3>👨‍⚕️ Professional Counseling</h3>
              <p>Schedule appointments with licensed psychologists and therapists for ongoing support.</p>
            </div>

            <div className="option-card">
              <h3>🏥 Crisis Planning</h3>
              <p>Work with our team to develop a personalized safety plan for difficult moments.</p>
            </div>

            <div className="option-card">
              <h3>🌍 Community Resources</h3>
              <p>Connect with local mental health services and community support organizations.</p>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="legal-section">
          <h2>Important Information & Disclaimers</h2>

          <div className="legal-cards">
            <div className="legal-card">
              <h3>⚠️ Emergency Services</h3>
              <p>
                This website does not replace emergency medical services. If you or someone you know
                is in immediate danger, call 911 or go to the nearest emergency room.
              </p>
            </div>

            <div className="legal-card">
              <h3>📋 Confidentiality & Privacy</h3>
              <p>
                All information shared with our counselors is confidential and protected by
                professional ethical standards and applicable laws. Exceptions apply only when
                immediate danger to yourself or others exists.
              </p>
            </div>

            <div className="legal-card">
              <h3>⚕️ Professional Standards</h3>
              <p>
                All our psychologists and counselors are licensed professionals adhering to strict
                ethical guidelines. However, online support is not suitable for everyone and may not
                be appropriate during severe crises.
              </p>
            </div>

            <div className="legal-card">
              <h3>🔒 Data Security</h3>
              <p>
                We use industry-standard encryption and security measures to protect your personal
                information. For details, please see our Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="contact-faq">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-items">
            <details className="faq-item">
              <summary>What happens when I call the hotline?</summary>
              <p>
                A trained counselor will answer your call. They'll listen to what you're going
                through, provide immediate support, and help you access appropriate resources. You
                can choose to continue the conversation or arrange follow-up care.
              </p>
            </details>

            <details className="faq-item">
              <summary>How long is the wait time to speak with someone?</summary>
              <p>
                We prioritize getting you connected as quickly as possible. Average wait time for
                the hotline is under 2 minutes. During peak times, it may be longer, but you'll be
                speaking with someone trained to help.
              </p>
            </details>

            <details className="faq-item">
              <summary>Can I remain anonymous?</summary>
              <p>
                Yes. You don't need to provide your name or any identifying information to call our
                hotline. Your privacy is important to us. However, providing information may help us
                serve you better.
              </p>
            </details>

            <details className="faq-item">
              <summary>Is the service available in Arabic?</summary>
              <p>
                Our team can provide support in both French and Arabic. Please let us know your
                preferred language when contacting us, and we'll connect you with a counselor who
                speaks it.
              </p>
            </details>

            <details className="faq-item">
              <summary>Is there a cost for calling the hotline?</summary>
              <p>
                The hotline is completely free. All services are available at no cost to anyone in
                need of support. Cost should never be a barrier to getting help.
              </p>
            </details>
          </div>
        </section>

        {/* Final Message */}
        <section className="final-message">
          <h2>We're Here For You</h2>
          <p>
            Reaching out takes courage. Whether you're struggling, worried about someone you care
            about, or just need someone to talk to, we're here. No judgment, no shame – just
            compassionate support from people who care about your wellbeing.
          </p>
          <p>
            <strong>You are not alone. Your life matters. Help is available.</strong>
          </p>
          <a href="tel:+21653701678" className="btn-primary btn-large">
            📞 Call Now: 53701678
          </a>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
