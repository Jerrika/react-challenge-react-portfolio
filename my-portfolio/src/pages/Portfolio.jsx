// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Weather Dashboard', image: '/src/assets/weather-app.png', deployedLink: 'https://jerrika.github.io/weather-dashboard/', githubLink: 'https://github.com/Jerrika/weather-dashboard' },
  { title: 'Personal Blog', image: '/src/assets/personal-blog.png', deployedLink: 'https://jerrika.github.io/blog/', githubLink: 'https://github.com/Jerrika/blogLinks' },
  { title: 'Taskboard Tracker', image: '/src/assets/taskboard-tracker.png', deployedLink: 'https://jerrika.github.io/task-board', githubLink: 'https://jerrika.github.io/task-board' },

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
