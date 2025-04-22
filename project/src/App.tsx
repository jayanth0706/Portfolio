import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Training from './components/Training';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Training />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;