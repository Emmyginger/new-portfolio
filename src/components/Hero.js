import React from 'react';
import { motion } from 'framer-motion';
import MyCV from '../assets/resume/my_cv.pdf'; 
import profilePic from '../assets/images/profile-pic.png'; 

const Hero = () => {
  const line1 = "Hi, I'm a";
  const line2 = "Frontend Developer";

  // Animation container variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  // Animation letter variants
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-main-content"> 
            <motion.div 
                className="hero-image" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }} // Delay to appear with headline
            >
                <img src={profilePic} alt="Your Name" />
            </motion.div>

            <motion.h1
              className="animated-headline"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {line1.split("").map((char, index) => {
                const charToShow = char === " " ? "\u00A0" : char;
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {charToShow}
                  </motion.span>
                );
              })}
              <br />
              <span className="colored-text">
                {line2.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }} 
        >
          I build beautiful, responsive, and animated web experiences. Proficient in HTML5, CSS3, JavaScript, and React.
        </motion.p>
        
        <motion.a
          href={MyCV}
          download="My_CV.pdf"
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }} 
        >
          Download My CV
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;