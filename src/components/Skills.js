import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
];

const Skills = () => {
  return (
    <section>
      <h2 className="section-title">My Skills</h2>
      <motion.div
        className="skills-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div className="skill-card" key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;