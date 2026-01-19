import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇹🇳' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Set document language attribute for proper accessibility
    document.documentElement.lang = lng;
    // Set text direction for Arabic
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setDropdownOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="language-switcher">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="lang-selector-btn"
        aria-label="Change language"
        aria-expanded={dropdownOpen}
      >
        <span>{currentLang?.flag}</span>
        <span>{currentLang?.code.toUpperCase()}</span>
        <span className="dropdown-arrow">▼</span>
      </button>

      {dropdownOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
              aria-label={`Switch to ${lang.label}`}
            >
              <span className="flag">{lang.flag}</span>
              <span className="label">{lang.label}</span>
              {i18n.language === lang.code && <span className="checkmark">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
