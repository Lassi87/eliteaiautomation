import React, { useState, useEffect } from 'react';
import CursorFollower from './components/ui/cursor-follower';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import CostComparison from './components/CostComparison';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDark(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Update DOM and localStorage when dark mode changes
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <CursorFollower />
      <Header isDark={isDark} toggleDark={toggleDarkMode} />
      <Hero />
      <ValueProposition />
      <CostComparison />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;