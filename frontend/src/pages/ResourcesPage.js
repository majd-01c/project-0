import React from 'react';
import './ResourcesPage.css';

/**
 * ResourcesPage Component
 * Crisis resources, warning signs, coping strategies, and grounding techniques
 */
function ResourcesPage() {
  return (
    <main id="main-content">
      <section className="resources-hero">
        <h1>Help & Resources</h1>
        <p>Knowledge and tools to support your mental health journey</p>
      </section>

      <div className="resources-content">
        {/* Emergency Resources */}
        <section className="resource-section emergency-resources">
          <h2>🚨 If You're in Crisis Right Now</h2>
          <div className="crisis-box">
            <p>
              <strong>If you're having thoughts of suicide or in immediate danger:</strong>
            </p>
            <div className="crisis-contacts">
              <div className="contact-item">
                <h3>Call 197</h3>
                <p>United States Emergency Services</p>
              </div>
              <div className="contact-item">
                <h3>53701678-HELP-NOW </h3>
                <p>National Suicide Prevention Lifeline - Available 24/7</p>
              </div>
              <div className="contact-item">
                <h3>Crisis Text Line</h3>
                <p>Text HOME to 741741</p>
              </div>
              <div className="contact-item">
                <h3>Go to Nearest Emergency Room</h3>
                <p>Get immediate professional medical attention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="resource-section">
          <h2>⚠️ Warning Signs of Suicide</h2>
          <p>
            If you notice these signs in yourself or someone you care about, reach out for help
            immediately:
          </p>

          <div className="warning-signs-grid">
            <div className="warning-card">
              <h3>Behavioral Changes</h3>
              <ul>
                <li>Withdrawal from family and friends</li>
                <li>Sudden changes in behavior or mood</li>
                <li>Giving away possessions</li>
                <li>Increased substance use</li>
                <li>Reckless behavior</li>
              </ul>
            </div>

            <div className="warning-card">
              <h3>Emotional Signs</h3>
              <ul>
                <li>Persistent sadness or hopelessness</li>
                <li>Feelings of worthlessness or guilt</li>
                <li>Extreme mood swings</li>
                <li>Overwhelming anger or rage</li>
                <li>Feeling trapped or in unbearable pain</li>
              </ul>
            </div>

            <div className="warning-card">
              <h3>Verbal Signs</h3>
              <ul>
                <li>Talking about death or suicide</li>
                <li>Expressing feeling like a burden</li>
                <li>Saying goodbye to people</li>
                <li>Talking about being trapped</li>
                <li>"Everyone would be better off without me"</li>
              </ul>
            </div>

            <div className="warning-card">
              <h3>Situational Risk Factors</h3>
              <ul>
                <li>Loss of a loved one or relationship</li>
                <li>Job or financial problems</li>
                <li>Access to means (weapons, medications)</li>
                <li>History of mental illness or trauma</li>
                <li>Recent discharge from psychiatric hospital</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What to Do in Crisis */}
        <section className="resource-section">
          <h2>💪 What to Do If Someone is in Crisis</h2>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Stay Calm and Take It Seriously</h3>
              <p>
                Never dismiss what they're saying. Listen without judgment and show you care about
                their wellbeing.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Ask Directly</h3>
              <p>
                Don't be afraid to ask "Are you thinking about suicide?" This doesn't plant the idea
                – it opens communication.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Listen Without Judgment</h3>
              <p>
                Let them express their feelings. Validate their emotions even if you don't understand
                their thoughts.
              </p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Keep Them Safe</h3>
              <p>
                Remove access to means of harm if possible (weapons, medication). Stay with them or
                ensure they're with a trusted person.
              </p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>Get Professional Help</h3>
              <p>
                Contact a mental health professional, call the National Suicide Prevention Lifeline,
                or go to an emergency room.
              </p>
            </div>

            <div className="step">
              <div className="step-number">6</div>
              <h3>Follow Up</h3>
              <p>
                After the crisis, check in regularly. Your ongoing support and presence can make a
                real difference.
              </p>
            </div>
          </div>
        </section>

        {/* Coping Strategies */}
        <section className="resource-section">
          <h2>🧠 Healthy Coping Strategies</h2>

          <div className="coping-strategies">
            <div className="strategy-card">
              <h3>🏃 Physical Activity</h3>
              <p>
                Exercise releases endorphins and reduces stress. Even a 20-minute walk can improve
                mood and mental clarity.
              </p>
            </div>

            <div className="strategy-card">
              <h3>🧘 Mindfulness & Meditation</h3>
              <p>
                Practice being present in the moment. Guided meditation apps can help reduce anxiety
                and racing thoughts.
              </p>
            </div>

            <div className="strategy-card">
              <h3>📝 Journaling</h3>
              <p>
                Writing down your feelings helps process emotions and identify patterns. No judgment
                – just honest expression.
              </p>
            </div>

            <div className="strategy-card">
              <h3>👥 Social Connection</h3>
              <p>
                Reach out to trusted friends or family. Connection is protective. Even a text to
                someone can help.
              </p>
            </div>

            <div className="strategy-card">
              <h3>💤 Sleep & Nutrition</h3>
              <p>
                Prioritize sleep and eat regular, nutritious meals. Physical health directly impacts
                mental wellbeing.
              </p>
            </div>

            <div className="strategy-card">
              <h3>🎨 Creative Expression</h3>
              <p>
                Art, music, writing, or any creative outlet helps process emotions in healthy ways.
              </p>
            </div>
          </div>
        </section>

        {/* Grounding Techniques */}
        <section className="resource-section">
          <h2>⚓ Grounding & Breathing Techniques</h2>
          <p>
            When you're feeling overwhelmed or panicked, these techniques can help bring you back
            to the present moment:
          </p>

          <div className="techniques-grid">
            <div className="technique-card">
              <h3>5-4-3-2-1 Grounding Technique</h3>
              <ol>
                <li>Notice 5 things you can see</li>
                <li>Notice 4 things you can touch</li>
                <li>Notice 3 things you can hear</li>
                <li>Notice 2 things you can smell</li>
                <li>Notice 1 thing you can taste</li>
              </ol>
              <p className="technique-description">
                This grounds you in the present moment and away from anxious thoughts.
              </p>
            </div>

            <div className="technique-card">
              <h3>Box Breathing (4-4-4-4)</h3>
              <ol>
                <li>Breathe in for 4 counts</li>
                <li>Hold breath for 4 counts</li>
                <li>Breathe out for 4 counts</li>
                <li>Hold for 4 counts, then repeat</li>
              </ol>
              <p className="technique-description">
                Regulates your nervous system and reduces anxiety and panic.
              </p>
            </div>

            <div className="technique-card">
              <h3>Body Scan Relaxation</h3>
              <ol>
                <li>Sit comfortably and close your eyes</li>
                <li>Starting at your toes, notice any tension</li>
                <li>Gradually move attention up your body</li>
                <li>Consciously relax each muscle group</li>
              </ol>
              <p className="technique-description">
                Releases physical tension and promotes relaxation and awareness.
              </p>
            </div>

            <div className="technique-card">
              <h3>Progressive Muscle Relaxation</h3>
              <ol>
                <li>Tense a muscle group for 5 seconds</li>
                <li>Release and notice the relaxation</li>
                <li>Move to the next muscle group</li>
                <li>Work through your entire body</li>
              </ol>
              <p className="technique-description">
                Creates awareness of tension and promotes deep relaxation.
              </p>
            </div>
          </div>
        </section>

       {/* Additional Resources – Tunisia */}
<section className="resource-section">
  <h2>📚 Helpful Resources in Tunisia</h2>

  <div className="resources-list">
    <div className="resource-item">
      <h3>Mental Health Organizations</h3>
      <ul>
        <li>
          <a href="https://psyquilibre.tn" target="_blank" rel="noreferrer">
            PsyQuilibre – Psychological support for young people and students
          </a>
        </li>
        <li>
          <a href="https://chirp.tn/wp/en/home-english/" target="_blank" rel="noreferrer">
            CHiRP – Prevention and early detection of mental health disorders
          </a>
        </li>
        <li>
          <a href="https://healthandpsychology.org" target="_blank" rel="noreferrer">
            Health & Psychology – Association of psychologists in Tunisia
          </a>
        </li>
        <li>
          <a href="https://stpea.tn" target="_blank" rel="noreferrer">
            STPEA – Child and adolescent mental health services
          </a>
        </li>
      </ul>
    </div>

    <div className="resource-item">
      <h3>Crisis Support & Assistance</h3>
      <ul>
        <li>
          National Psychological Assistance Hotline: <strong>8010 5050</strong>
        </li>
        <li>
          Medical Emergency (SAMU): <strong>190</strong>
        </li>
        <li>
          Ministry of Health – Mental Health Services
        </li>
      </ul>
    </div>

    <div className="resource-item">
      <h3>Wellness Apps & Tools</h3>
      <ul>
        <li>Headspace – Meditation and stress management</li>
        <li>Calm – Sleep and relaxation</li>
        <li>Insight Timer – Free meditation</li>
        <li>Wysa – AI-assisted emotional support</li>
      </ul>
    </div>
  </div>
</section>


        {/* Call to Action */}
        <section className="resource-section cta">
          <h2>You Don't Have to Face This Alone</h2>
          <p>
            Reach out today. Our compassionate professionals are ready to support you through this
            difficult time. Every conversation is confidential, judgment-free, and could change
            your life.
          </p>
          <div style={{ textAlign: 'center' }}>
            <button className="btn-primary btn-large">
              💬 Start a Conversation with a Psychologist
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ResourcesPage;
