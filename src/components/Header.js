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
      <a href="#" className="logo">Your Name</a>
      <div className="header-right">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="mailto:youremail@example.com"><HiOutlineMail /></a>
        <button onClick={toggleTheme} className="theme-switcher">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;