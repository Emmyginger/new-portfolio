import React from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/images/profile-picture.png'; 

const About = () => {
  return (
    <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
    >
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
            <motion.div 
                className="about-image"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img src={profilePicture} alt="Your Name" />
            </motion.div>
            <motion.div 
                className="about-text"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p>
                    I'm a passionate frontend developer dedicated to creating intuitive and dynamic user interfaces. 
                    With a strong foundation in modern web technologies, I specialize in bringing ideas to life in the browser.
                    My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default About;