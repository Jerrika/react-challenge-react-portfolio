// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', image: '/path/to/image1.jpg', deployedLink: '#', githubLink: '#' },
  { title: 'Project 2', image: '/path/to/image2.jpg', deployedLink: '#', githubLink: '#' },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
