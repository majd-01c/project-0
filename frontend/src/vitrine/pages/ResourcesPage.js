import React from 'react';
import { useTranslation } from 'react-i18next';
import './ResourcesPage.css';

/**
 * ResourcesPage Component
 * Crisis resources, warning signs, coping strategies, and grounding techniques
 */
function ResourcesPage() {
  const { t } = useTranslation();

  return (
    <main id="main-content">
      <section className="resources-hero">
        <h1>{t('resources.title')}</h1>
        <p>{t('resources.subtitle')}</p>
      </section>

      <div className="resources-content">
        {/* Emergency Resources */}
        <section className="resource-section emergency-resources">
          <h2>🚨 {t('resources.inCrisis')}</h2>
          <div className="crisis-box">
            <p>
              <strong>{t('resources.crisisMessage')}</strong>
            </p>
            <div className="crisis-contacts">
              <div className="contact-item">
                <h3>{t('resources.emergencyService1')}</h3>
                <p>{t('resources.emergencyServiceDesc1')}</p>
              </div>
              <div className="contact-item">
                <h3>{t('resources.emergencyService2')}</h3>
                <p>{t('resources.emergencyServiceDesc2')}</p>
              </div>
              <div className="contact-item">
                <h3>{t('resources.emergencyService3')}</h3>
                <p>{t('resources.emergencyServiceDesc3')}</p>
              </div>
              <div className="contact-item">
                <h3>{t('resources.emergencyService4')}</h3>
                <p>{t('resources.emergencyServiceDesc4')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="resource-section">
          <h2>⚠️ {t('resources.warningSignals')}</h2>
          <p>{t('resources.warningSignalsIntro')}</p>

          <div className="warning-signs-grid">
            <div className="warning-card">
              <h3>{t('resources.behavioral')}</h3>
              <ul>
                <li>{t('resources.behavioral1')}</li>
                <li>{t('resources.behavioral2')}</li>
                <li>{t('resources.behavioral3')}</li>
                <li>{t('resources.behavioral4')}</li>
                <li>{t('resources.behavioral5')}</li>
              </ul>
            </div>

            <div className="warning-card">
              <h3>{t('resources.emotional')}</h3>
              <ul>
                <li>{t('resources.emotional1')}</li>
                <li>{t('resources.emotional2')}</li>
                <li>{t('resources.emotional3')}</li>
                <li>{t('resources.emotional4')}</li>
                <li>{t('resources.emotional5')}</li>
              </ul>
            </div>

            <div className="warning-card">
              <h3>{t('resources.verbal')}</h3>
              <ul>
                <li>{t('resources.verbal1')}</li>
                <li>{t('resources.verbal2')}</li>
                <li>{t('resources.verbal3')}</li>
                <li>{t('resources.verbal4')}</li>
                <li>{t('resources.verbal5')}</li>
              </ul>
            </div>

            <div className="warning-card">
              <h3>{t('resources.situational')}</h3>
              <ul>
                <li>{t('resources.situational1')}</li>
                <li>{t('resources.situational2')}</li>
                <li>{t('resources.situational3')}</li>
                <li>{t('resources.situational4')}</li>
                <li>{t('resources.situational5')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What to Do in Crisis */}
        <section className="resource-section">
          <h2>💪 {t('resources.whatToDo')}</h2>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>{t('resources.step1Title')}</h3>
              <p>{t('resources.step1Desc')}</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>{t('resources.step2Title')}</h3>
              <p>{t('resources.step2Desc')}</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>{t('resources.step3Title')}</h3>
              <p>{t('resources.step3Desc')}</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>{t('resources.step4Title')}</h3>
              <p>{t('resources.step4Desc')}</p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>{t('resources.step5Title')}</h3>
              <p>{t('resources.step5Desc')}</p>
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
          <h2>🧠 {t('resources.copingStrategies')}</h2>

          <div className="coping-strategies">
            <div className="strategy-card">
              <h3>🏃 {t('resources.copingPhysical')}</h3>
              <p>{t('resources.copingPhysicalDesc')}</p>
            </div>

            <div className="strategy-card">
              <h3>🧘 {t('resources.copingMindfulness')}</h3>
              <p>{t('resources.copingMindfulnessDesc')}</p>
            </div>

            <div className="strategy-card">
              <h3>📝 {t('resources.copingJournaling')}</h3>
              <p>{t('resources.copingJournalingDesc')}</p>
            </div>

            <div className="strategy-card">
              <h3>👥 {t('resources.copingSocial')}</h3>
              <p>{t('resources.copingSocialDesc')}</p>
            </div>

            <div className="strategy-card">
              <h3>💤 {t('resources.copingSleep')}</h3>
              <p>{t('resources.copingSleepDesc')}</p>
            </div>

            <div className="strategy-card">
              <h3>🎨 {t('resources.copingCreative')}</h3>
              <p>{t('resources.copingCreativeDesc')}</p>
            </div>
          </div>
        </section>

        {/* Grounding Techniques */}
        <section className="resource-section">
          <h2>⚓ {t('resources.groundingTechniques')}</h2>
          <p>{t('resources.groundingIntro')}</p>

          <div className="techniques-grid">
            <div className="technique-card">
              <h3>{t('resources.technique1Title')}</h3>
              <ol>
                <li>{t('resources.technique1Step1')}</li>
                <li>{t('resources.technique1Step2')}</li>
                <li>{t('resources.technique1Step3')}</li>
                <li>{t('resources.technique1Step4')}</li>
                <li>{t('resources.technique1Step5')}</li>
              </ol>
              <p className="technique-description">{t('resources.technique1Desc')}</p>
            </div>

            <div className="technique-card">
              <h3>{t('resources.technique2Title')}</h3>
              <ol>
                <li>{t('resources.technique2Step1')}</li>
                <li>{t('resources.technique2Step2')}</li>
                <li>{t('resources.technique2Step3')}</li>
                <li>{t('resources.technique2Step4')}</li>
              </ol>
              <p className="technique-description">{t('resources.technique2Desc')}</p>
            </div>

            <div className="technique-card">
              <h3>{t('resources.technique3Title')}</h3>
              <ol>
                <li>{t('resources.technique3Step1')}</li>
                <li>{t('resources.technique3Step2')}</li>
                <li>{t('resources.technique3Step3')}</li>
                <li>{t('resources.technique3Step4')}</li>
              </ol>
              <p className="technique-description">{t('resources.technique3Desc')}</p>
            </div>

            <div className="technique-card">
              <h3>{t('resources.technique4Title')}</h3>
              <ol>
                <li>{t('resources.technique4Step1')}</li>
                <li>{t('resources.technique4Step2')}</li>
                <li>{t('resources.technique4Step3')}</li>
                <li>{t('resources.technique4Step4')}</li>
              </ol>
              <p className="technique-description">{t('resources.technique4Desc')}</p>
            </div>
          </div>
        </section>

       {/* Additional Resources – Tunisia */}
<section className="resource-section">
  <h2>{t('resources.tunisiaResources')}</h2>

  <div className="resources-list">
    <div className="resource-item">
      <h3>{t('resources.mentalHealthOrgs')}</h3>
      <ul>
        <li>
          <a href="https://psyquilibre.tn" target="_blank" rel="noreferrer">
            {t('resources.org1')}
          </a>
        </li>
        <li>
          <a href="https://chirp.tn/wp/en/home-english/" target="_blank" rel="noreferrer">
            {t('resources.org2')}
          </a>
        </li>
        <li>
          <a href="https://healthandpsychology.org" target="_blank" rel="noreferrer">
            {t('resources.org3')}
          </a>
        </li>
        <li>
          <a href="https://stpea.tn" target="_blank" rel="noreferrer">
            {t('resources.org4')}
          </a>
        </li>
      </ul>
    </div>

    <div className="resource-item">
      <h3>{t('resources.crisisSupport')}</h3>
      <ul>
        <li>
          {t('resources.nationalHotline')}: <strong>8010 5050</strong>
        </li>
        <li>
          {t('resources.samu')}: <strong>190</strong>
        </li>
        <li>
          {t('resources.ministryHealth')}
        </li>
      </ul>
    </div>

    <div className="resource-item">
      <h3>{t('resources.wellnessApps')}</h3>
      <ul>
        <li>{t('resources.app1')}</li>
        <li>{t('resources.app2')}</li>
        <li>{t('resources.app3')}</li>
        <li>{t('resources.app4')}</li>
      </ul>
    </div>
  </div>
</section>


        {/* Call to Action */}
        <section className="resource-section cta">
          <h2>{t('resources.notAlone')}</h2>
          <p>{t('resources.notAloneText')}</p>
          <div style={{ textAlign: 'center' }}>
            <button className="btn-primary btn-large">
              💬 {t('resources.startConversation')}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ResourcesPage;
