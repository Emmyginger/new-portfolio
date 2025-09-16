// src/components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <div className="contact-links">
            <a href="https://www.linkedin.com/in/israel-orizu-7467b0209/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Emmyginger" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://wa.me/2348103306063" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="mailto:israelorizu@gmail.com"><HiOutlineMail /></a>
        </div>
    </section>
  )
}

export default Contact;