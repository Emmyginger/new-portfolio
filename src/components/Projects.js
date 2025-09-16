import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import project1 from '../assets/images/project1.png'; 
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';

const projectData = [
    {
        img: project1,
        title: 'Connectsphere',
        description: 'ConnectSphere is a feature-rich, responsive clone of LinkedIn built entirely with React.js.',
        liveLink: 'https://1connect-sphere.netlify.app/',
        repoLink: 'https://github.com/Emmyginger/connectsphere',
    },
    {
        img: project2,
        title: 'Cogniverse',
        description: 'A modern, responsive AI chat application with beautiful gradients and smooth animations.',
        liveLink: 'https://cogniverse-bot.netlify.app/',
        repoLink: 'https://github.com/Emmyginger/Cogniverse',
    },
    {
        img: project3,
        title: 'To-do Pal',
        description: 'A clean, modern, and responsive to-do list application built with React.',
        liveLink: 'https://todo-pal.netlify.app/',
        repoLink: 'https://github.com/Emmyginger/todo-app',
    },
    {
        img: project4,
        title: 'Web2 quiz',
        description: 'An advanced, sectioned quiz app built with pure HTML, CSS, and JavaScript!',
        liveLink: 'https://60quiz-app.netlify.app/',
        repoLink: 'https://github.com/Emmyginger/quiz-app',
    },
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section>
            <h2 className="section-title">My Projects</h2>
            <motion.div 
                className="project-carousel"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Slider {...settings}>
                    {projectData.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.img} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-links">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </section>
    );
};

export default Projects;