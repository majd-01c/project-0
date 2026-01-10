import React from 'react';
import PsychologistCard from '../components/PsychologistCard';
import './PsychologistsPage.css';

/**
 * PsychologistsPage Component
 * Displays a list of psychologists available in Tunisia
 * (Mock data for academic/demo purposes)
 */
function PsychologistsPage() {
  // Mock data – Tunisian context
  const psychologists = [
    {
      id: 1,
      name: 'Dr. Amina Ben Salah',
      gender: 'female',
      specialty: 'Depression & Anxiety',
      availability: ['online', 'phone', 'inperson'],
      bio: 'Licensed clinical psychologist in Tunisia with 10+ years of experience. Specializes in anxiety disorders and depression using CBT approaches.',
      contactUrl: 'tel:80105050',
    },
    {
      id: 2,
      name: 'Dr. Mohamed Trabelsi',
      gender: 'male',
      specialty: 'Crisis Intervention & Suicidal Ideation',
      availability: ['online', 'phone'],
      bio: 'Psychologist trained in crisis intervention and emotional support for individuals at risk. Works closely with national support services.',
      contactUrl: 'tel:80105050',
    },
    {
      id: 3,
      name: 'Dr. Sara Gharbi',
      gender: 'female',
      specialty: 'Family Therapy & Relationships',
      availability: ['online', 'inperson'],
      bio: 'Specialist in family therapy helping couples and families improve communication and emotional wellbeing.',
      contactUrl: 'tel:80105050',
    },
    {
      id: 4,
      name: 'Dr. Youssef Mabrouk',
      gender: 'male',
      specialty: 'Addiction & Behavioral Disorders',
      availability: ['phone', 'inperson'],
      bio: 'Experienced in addiction support and behavioral therapy, focusing on recovery and long-term wellbeing.',
      contactUrl: 'tel:80105050',
    },
    {
      id: 5,
      name: 'Dr. Ines Kacem',
      gender: 'female',
      specialty: 'Trauma & PTSD',
      availability: ['online', 'phone', 'inperson'],
      bio: 'Trauma-informed psychologist supporting individuals affected by emotional trauma and stressful life events.',
      contactUrl: 'tel:80105050',
    },
    {
      id: 6,
      name: 'Dr. Hichem Zoghlami',
      gender: 'male',
      specialty: 'Students & Young Adults',
      availability: ['online', 'phone'],
      bio: 'Focuses on student mental health, stress management, academic pressure, and life transitions.',
      contactUrl: 'tel:80105050',
    },
  ];

  return (
    <main id="main-content">
      <section className="psychologists-hero">
        <h1>Our Psychologists in Tunisia</h1>
        <p>Compassionate professionals committed to your mental wellbeing</p>
      </section>

      <div className="psychologists-content">
        <section className="psychologists-intro">
          <h2>Find the Right Support</h2>
          <p>
            Our platform connects you with qualified psychologists in Tunisia.
            Each professional brings expertise in specific mental health areas
            and is committed to ethical, confidential, and respectful care.
          </p>

          <div className="specialties-info">
            <p>
              <strong>Available through:</strong> Online sessions, phone calls,
              and in-person consultations
            </p>
            <p>
              <strong>Specialties include:</strong> Depression, anxiety, crisis
              support, trauma, addiction, family therapy, and student wellbeing
            </p>
          </div>
        </section>

        <section className="psychologists-grid">
          {psychologists.map((psychologist) => (
            <PsychologistCard key={psychologist.id} {...psychologist} />
          ))}
        </section>

        <section className="how-to-connect">
          <h2>How to Get Support</h2>

          <div className="steps-grid">
            <div className="step-item">
              <div className="step-icon">📞</div>
              <h3>Call for Help</h3>
              <p>National psychological support line: <strong>8010 5050</strong></p>
            </div>

            <div className="step-item">
              <div className="step-icon">💬</div>
              <h3>Online Support</h3>
              <p>Connect with a psychologist through online consultation</p>
            </div>

            <div className="step-item">
              <div className="step-icon">📅</div>
              <h3>Book a Session</h3>
              <p>Schedule an appointment based on availability</p>
            </div>

            <div className="step-item">
              <div className="step-icon">🤝</div>
              <h3>Begin Your Journey</h3>
              <p>Receive professional guidance in a safe and supportive space</p>
            </div>
          </div>
        </section>

        <section className="commitment-section">
          <h2>Our Commitment</h2>

          <div className="commitment-grid">
            <div className="commitment-item">
              <h3>✓ Qualified Professionals</h3>
              <p>Licensed psychologists practicing in Tunisia</p>
            </div>

            <div className="commitment-item">
              <h3>✓ Confidentiality</h3>
              <p>Your privacy is respected and protected</p>
            </div>

            <div className="commitment-item">
              <h3>✓ Ethical Care</h3>
              <p>Evidence-based and culturally sensitive approaches</p>
            </div>

            <div className="commitment-item">
              <h3>✓ Accessibility</h3>
              <p>Support adapted to students and young adults</p>
            </div>

            <div className="commitment-item">
              <h3>✓ Crisis Support</h3>
              <p>Emergency guidance available through national services</p>
            </div>

            <div className="commitment-item">
              <h3>✓ Respect & Inclusion</h3>
              <p>Non-judgmental and inclusive mental health support</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>You Are Not Alone</h2>
          <p>
            Seeking help is a sign of strength. Support is available,
            and taking the first step can change everything.
          </p>
          <button className="btn-primary btn-large">
            📞 Call Now: 53701678
          </button>
        </section>
      </div>
    </main>
  );
}

export default PsychologistsPage;
