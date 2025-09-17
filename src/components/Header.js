import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Header = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <a href="https://izzys-portfolio.netlify.app" className="logo">Israel Orizu</a>
      <div className="header-right">
        <a href="https://www.linkedin.com/in/israel-orizu-7467b0209/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Emmyginger" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://facebook.com/israel.orizu" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://wa.me/2348103306063" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="mailto:israelorizu@gmail.com"><HiOutlineMail /></a>
        <button onClick={toggleTheme} className="theme-switcher">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;