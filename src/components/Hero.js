import React from 'react';
import { motion } from 'framer-motion';
import MyCV from '../assets/resume/my_cv.pdf'; 

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm a <span>Frontend Developer</span></h1>
        <p>I build beautiful, responsive, and animated web experiences. Proficient in HTML5, CSS3, JavaScript, and React.</p>
        <a href={MyCV} download="My_CV.pdf" className="cta-button">
          Download My CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;