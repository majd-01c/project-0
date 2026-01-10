import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Set document language attribute for proper accessibility
    document.documentElement.lang = lng;
    // Set text direction for Arabic
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`lang-btn ${i18n.language === 'ar' ? 'active' : ''}`}
        aria-label="Switch to Arabic"
      >
        AR
      </button>
    </div>
  );
}

export default LanguageSwitcher;
