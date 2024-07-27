// src/pages/Resume.jsx
import React from 'react';

const proficiencies = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/src/assets/Jerrika Gabriel - Full Stack Developer.pdf" download>Download Resume</a>

      
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>



      <h3>Professional Summary</h3>
              <ul>
                <p>
                I am a dedicated and passionate full-stack developer with a recently completed Full-Stack Developer Bootcamp. During this intensive program, I honed my skills in both front-end and back-end development, working extensively with modern technologies to build robust and scalable applications.
                </p>
              </ul>
              
              <h3> Top Projects (3) </h3>
                <h4><a href="https://jerrika.github.io/weather-dashboard/" target="_blank">Weather Dashboard (Feb 2024 - Aug 2024)</a></h4>
                    <ul>
                        <li><strong>Technology:</strong>HTML, CSS, and JavaScript</li>
                        <li>dynamically updated HTML and CSS.</li>
                    </ul>
                
                <h4><a href="https://github.com/Jerrika/blogLinks" target="_blank">Personal blog (Feb 2024 - Aug 2024)</a></h4>
                  <ul>
                    <li><strong>Technology:</strong> GitHub &  JavaScript</li>
                    <li>Create a two-page website where users will input and view blog posts. </li>
                    <li>Built a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. </li>
                  </ul>

                <h4><a href="v" target="_blank">Taskboard (Feb 2024 - Aug 2024)</a></h4>
                  <ul>
                      <li><strong>Technology:</strong> GitHub, HTML5, CSS3, JavaScript, Express, jQuery</li>
                      <li>Create a simple task board application that allows a team to manage project tasks</li>
                      <li>The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</li>
                  </ul>

<h3>Full Stack Development Skills</h3>
            {/* <hr className="star-secondary" /> */}
            <ul className="list-inline">
            <li className="list-inline-item">
                <strong>Languages:</strong> HTML5, CSS3, JavaScript, Python, Scratch, #C </li>
            <li className="list-inline-item">
                <strong>Libraries & Frameworks:</strong> Bootstrap, jQuery, React, D3.js, Node.js, Styled-Components, 
                Express.js, Angular, Handlebars, Sequelize.js.</li>
            <li className="list-inline-item">
                <strong>Databases:</strong> NoSQL, MySQL, MongoDB, PostgreSQL.</li>
            <li className="list-inline-item">
                <strong>DevOps & Tools:</strong> VS Code, Git, GitHub, GitLab, Heroku, Apollo, HRIS, Microsoft Azure,
                Microsoft Office 365, MongoDB Compass, Mongo DB Atlas, NPM, Insomnia, (CLI).</li>
            <li className="list-inline-item">
                <strong>Methodologies:</strong> Agile Project Managment, Scrum, Kanban, Version Control, E-Commerce, SEO, CMS-style, (TDD), (CI/CD), (PIR). </li>
              <li className="list-inline-item">
                <strong>Operating Systems:</strong> Windows, macOS, Linux, iOS, Android.</li>
            <li className="list-inline-item">
                <strong>Skills:</strong> Styled-Components, Responsive Web Design, UI/UX Design Principles, API Integration, Express.js, GraphQL, Object-Oriented Programming (OOP), Object Relational, Mapping(ORM),
                MERN Stack, GraphQL, Wireframe Design, (CRUD) operations.</li>
            </ul>

            <h3>Education</h3>
            {/* <hr className="star-secondary" /> */}
          
              <h4>Full Stack Web Development</h4>
              <h5>SMU Bootcamp | Dallas, TX | Feb 2024 - Aug 2024</h5>
              <ul>
                <li>Curriculum: Unit Projects: (20) Team Projects: (3)</li>
                <li>Curriculum: HTML5, CSS3, JavaScript, Git, GitHub, MongoDB, Express.js, React.js, Node.js, Full Stack, MERN Stack, DOM, MVC, ORM, CLI, PWA’s, OOP, jQuery, Bootstrap, API, SQL, MySQL, GraphQL, SWE, SDLC, Agile Methodology (SCRUM & Kanban), UI/UX Design, Principles, Wireframe, Responsive Web Design & Web Accessibility.</li>
              </ul>

    </section>
  );
};

export default Resume;
