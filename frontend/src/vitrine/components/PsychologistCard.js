import React from 'react';
import { useTranslation } from 'react-i18next';
import './PsychologistCard.css';

/**
 * PsychologistCard Component
 * Displays information about a psychologist
 * Props: { name, specialty, availability, bio, contactUrl }
 */
function PsychologistCard({ name, gender, specialty, availability, bio, contactUrl }) {
  const { t } = useTranslation();
  return (
    <div className="psychologist-card" role="article" aria-label={`Psychologist: ${name}`}>
      <div className="psychologist-avatar">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=4a90e2&textColor=ffffff&fontSize=40`}
          alt={name}
        />
      </div>

      <div className="psychologist-info">
        <h3>{name}</h3>
        <p className="specialty">
          <strong>{t('common.specialty')}:</strong> {specialty}
        </p>

        <div className="availability" aria-label={`${t('common.availableVia')}: ${availability.join(', ')}`}>
          {availability.includes('online') && (
            <span className="badge badge-online" title={t('common.onlineConsultation')}>
              💻 {t('common.online')}
            </span>
          )}
          {availability.includes('phone') && (
            <span className="badge badge-phone" title={t('common.phoneConsultation')}>
              ☎️ {t('common.phone')}
            </span>
          )}
          {availability.includes('inperson') && (
            <span className="badge badge-inperson" title={t('common.inPersonConsultation')}>
              👤 {t('common.inPerson')}
            </span>
          )}
        </div>

        <p className="bio">{bio}</p>

        <button
          className="btn-primary btn-contact"
          onClick={() => {
            if (contactUrl) {
              window.location.href = contactUrl;
            }
          }}
        >
          {t('common.contact')} {name.split(' ')[0]}
        </button>
      </div>
    </div>
  );
}

export default PsychologistCard;
