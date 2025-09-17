import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme + '-mode';
    document.body.style.setProperty('--card-bg', `var(--card-bg-${newTheme})`);
    document.body.style.setProperty('--shadow', `var(--shadow-${newTheme})`);
    document.body.style.setProperty('--primary-color', `var(--primary-color-${newTheme})`);
  };

  useEffect(() => {
    document.body.className = theme + '-mode';
    document.body.style.setProperty('--card-bg', `var(--card-bg-${theme})`);
    document.body.style.setProperty('--shadow', `var(--shadow-${theme})`);
    document.body.style.setProperty('--primary-color', `var(--primary-color-${theme})`);
  }, [theme]);
  
  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;