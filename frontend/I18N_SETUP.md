# i18n Setup Complete - M3ak Multilingual Support

## What's Been Configured

Your M3ak app now supports **3 languages**:
- 🇬🇧 **English (EN)**
- 🇫🇷 **French (FR)**
- 🇦🇪 **Arabic (AR)**

## Files Created

### Core i18n Files
- `src/i18n.js` - i18next configuration with language detection
- `src/locales/en.json` - English translations
- `src/locales/fr.json` - French translations
- `src/locales/ar.json` - Arabic translations

### Components
- `src/components/LanguageSwitcher.js` - Language switcher component
- `src/components/LanguageSwitcher.css` - Language switcher styling

## Files Updated

1. **App.js** - Added i18n import and language effect hook
2. **Header.js** - Integrated LanguageSwitcher and translated navigation
3. **Header.css** - Added `.header-actions` container for language switcher

## How to Use

### Display Translations in Your Components

```javascript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.subtitle')}</p>
    </div>
  );
}
```

### Example Translation Keys Available

- `nav.home`, `nav.about`, `nav.resources`, `nav.psychologists`, `nav.contact`
- `home.title`, `home.subtitle`, `home.emergency`
- `about.title`, `about.ourMission`
- `contact.title`, `contact.emergencyCall`
- And many more...

## Browser Language Support

The app automatically:
1. Detects user's browser language
2. Stores language preference in localStorage
3. Applies RTL layout for Arabic (`dir="rtl"`)
4. Updates HTML `lang` attribute for accessibility

## Next Steps

### To Complete i18n Integration:

1. **Update HomePage.js** - Wrap all text in `t()` function calls
2. **Update AboutPage.js** - Add translations
3. **Update ResourcesPage.js** - Add translations
4. **Update PsychologistsPage.js** - Add translations
5. **Update ContactPage.js** - Add translations
6. **Update Footer.js** - Add translations

### Example Update Pattern:
```javascript
// Before
<h1>You Are Not Alone</h1>

// After
<h1>{t('home.title')}</h1>
```

## CSS RTL Support

For Arabic language, you may want to add RTL-specific styles:

```css
[dir="rtl"] .my-component {
  text-align: right;
  margin-right: 10px;
  margin-left: 0;
}
```

## Testing

1. Click language buttons (EN, FR, AR) in header
2. Verify all translated text updates
3. For Arabic: Verify layout switches to RTL (right-to-left)
4. Refresh page: Language preference should persist

## Translation Keys Structure

All translations follow this pattern:
```
{
  "section": {
    "key": "value"
  }
}
```

Main sections:
- `nav` - Navigation links
- `header` - Header content
- `footer` - Footer content
- `home` - Home page
- `about` - About page
- `resources` - Resources page
- `psychologists` - Psychologists page
- `contact` - Contact page

## Dependencies Installed

```
i18next
react-i18next
i18next-browser-languagedetector
```

Enjoy your multilingual M3ak app! 🌍
