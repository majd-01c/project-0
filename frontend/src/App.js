import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './vitrine/components/Header';
import Footer from './vitrine/components/Footer';
import HomePage from './vitrine/pages/HomePage';
import AboutPage from './vitrine/pages/AboutPage';
import ResourcesPage from './vitrine/pages/ResourcesPage';
import PsychologistsPage from './vitrine/pages/PsychologistsPage';
import ContactPage from './vitrine/pages/ContactPage';
import PrivateLayout from './app/main';
import { ThemeProvider } from './app/context/ThemeContext';
import './vitrine/styles/global.css';
import './App.css';
import './i18n';

/**
 * Main App Component
 * Sets up routing and layout structure for the suicide prevention platform
 */
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document language and direction on mount and when language changes
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Routes>
            {/* Admin/App Route - your main.js layout */}
            <Route path="/app/*" element={<PrivateLayout />} />
            
            {/* Public Routes */}
            <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
            <Route path="/about" element={<><Header /><AboutPage /><Footer /></>} />
            <Route path="/resources" element={<><Header /><ResourcesPage /><Footer /></>} />
            <Route path="/psychologists" element={<><Header /><PsychologistsPage /><Footer /></>} />
            <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

