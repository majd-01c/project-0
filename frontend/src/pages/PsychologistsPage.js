import React from 'react';
import { useTranslation } from 'react-i18next';
import PsychologistCard from '../components/PsychologistCard';
import './PsychologistsPage.css';

/**
 * PsychologistsPage Component
 * Displays a list of psychologists available in Tunisia
 * (Mock data for academic/demo purposes)
 */
function PsychologistsPage() {
  const { t } = useTranslation();
  // Mock data – Tunisian context
  const psychologists = [
    {
      id: 1,
      name: t('psychologists.psychologist1Name'),
      gender: 'female',
      specialty: t('psychologists.psychologist1Specialty'),
      availability: ['online', 'phone', 'inperson'],
      bio: t('psychologists.psychologist1Bio'),
      contactUrl: 'tel:80105050',
    },
    {
      id: 2,
      name: t('psychologists.psychologist2Name'),
      gender: 'male',
      specialty: t('psychologists.psychologist2Specialty'),
      availability: ['online', 'phone'],
      bio: t('psychologists.psychologist2Bio'),
      contactUrl: 'tel:80105050',
    },
    {
      id: 3,
      name: t('psychologists.psychologist3Name'),
      gender: 'female',
      specialty: t('psychologists.psychologist3Specialty'),
      availability: ['online', 'inperson'],
      bio: t('psychologists.psychologist3Bio'),
      contactUrl: 'tel:80105050',
    },
    {
      id: 4,
      name: t('psychologists.psychologist4Name'),
      gender: 'male',
      specialty: t('psychologists.psychologist4Specialty'),
      availability: ['phone', 'inperson'],
      bio: t('psychologists.psychologist4Bio'),
      contactUrl: 'tel:80105050',
    },
    {
      id: 5,
      name: t('psychologists.psychologist5Name'),
      gender: 'female',
      specialty: t('psychologists.psychologist5Specialty'),
      availability: ['online', 'phone', 'inperson'],
      bio: t('psychologists.psychologist5Bio'),
      contactUrl: 'tel:80105050',
    },
    {
      id: 6,
      name: t('psychologists.psychologist6Name'),
      gender: 'male',
      specialty: t('psychologists.psychologist6Specialty'),
      availability: ['online', 'phone'],
      bio: t('psychologists.psychologist6Bio'),
      contactUrl: 'tel:80105050',
    },
  ];

  return (
    <main id="main-content">
      <section className="psychologists-hero">
        <h1>{t('psychologists.title')}</h1>
        <p>{t('psychologists.subtitle')}</p>
      </section>

      <div className="psychologists-content">
        <section className="psychologists-intro">
          <h2>{t('psychologists.findSupport')}</h2>
          <p>{t('psychologists.intro')}</p>

          <div className="specialties-info">
            <p>
              <strong>{t('psychologists.availableThrough')}:</strong> {t('psychologists.availableMethods')}
            </p>
            <p>
              <strong>{t('psychologists.specialties')}:</strong> {t('psychologists.specialtiesList')}
            </p>
          </div>
        </section>

        <section className="psychologists-grid">
          {psychologists.map((psychologist) => (
            <PsychologistCard key={psychologist.id} {...psychologist} />
          ))}
        </section>

        <section className="how-to-connect">
          <h2>{t('psychologists.howToConnect')}</h2>

          <div className="steps-grid">
            <div className="step-item">
              <div className="step-icon">📞</div>
              <h3>{t('psychologists.step1Title')}</h3>
              <p>{t('psychologists.step1Desc')}</p>
            </div>

            <div className="step-item">
              <div className="step-icon">💬</div>
              <h3>{t('psychologists.step2Title')}</h3>
              <p>{t('psychologists.step2Desc')}</p>
            </div>

            <div className="step-item">
              <div className="step-icon">📅</div>
              <h3>{t('psychologists.step3Title')}</h3>
              <p>{t('psychologists.step3Desc')}</p>
            </div>

            <div className="step-item">
              <div className="step-icon">🤝</div>
              <h3>{t('psychologists.step4Title')}</h3>
              <p>{t('psychologists.step4Desc')}</p>
            </div>
          </div>
        </section>

        <section className="commitment-section">
          <h2>{t('psychologists.ourCommitment')}</h2>

          <div className="commitment-grid">
            <div className="commitment-item">
              <h3>✓ {t('psychologists.commitment1Title')}</h3>
              <p>{t('psychologists.commitment1Desc')}</p>
            </div>

            <div className="commitment-item">
              <h3>✓ {t('psychologists.commitment2Title')}</h3>
              <p>{t('psychologists.commitment2Desc')}</p>
            </div>

            <div className="commitment-item">
              <h3>✓ {t('psychologists.commitment3Title')}</h3>
              <p>{t('psychologists.commitment3Desc')}</p>
            </div>

            <div className="commitment-item">
              <h3>✓ {t('psychologists.commitment4Title')}</h3>
              <p>{t('psychologists.commitment4Desc')}</p>
            </div>

            <div className="commitment-item">
              <h3>✓ {t('psychologists.commitment5Title')}</h3>
              <p>{t('psychologists.commitment5Desc')}</p>
            </div>

            <div className="commitment-item">
              <h3>✓ {t('psychologists.commitment6Title')}</h3>
              <p>{t('psychologists.commitment6Desc')}</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>{t('psychologists.youAreNotAlone')}</h2>
          <p>{t('psychologists.youAreNotAloneText')}</p>
          <button className="btn-primary btn-large">
            📞 {t('psychologists.callNow')}
          </button>
        </section>
      </div>
    </main>
  );
}

export default PsychologistsPage;
