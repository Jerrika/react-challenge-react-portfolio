// src/pages/AboutMe.jsx
import React from 'react';
import headshotImage from '../assets/headshots-2020-Jerrika.JPG'


const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={headshotImage} alt="Headshot" />      <p>Hi there! I am Jerrika Gabriel, a motivated and enthusiastic full-stack developer who recently completed the Full-Stack Developer Bootcamp at Southern Methodist University. This comprehensive program provided me with a solid foundation in both front-end and back-end development, preparing me to create innovative and efficient web applications.</p>
    </section>
  );
};

export default AboutMe;
