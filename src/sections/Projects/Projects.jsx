

import styles from './ProjectsStyles.module.css';
import bookNest1 from '../../assets/bookNest1.png';
import proj2 from '../../assets/proj2.png';

import React from 'react';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <img src={bookNest1} alt="SR BookNest" />
          <h3>SR BookNest</h3>
          <p>Ecommerce BookStore App</p>
          <a href="https://github.com/Ade-mir/company-landing-page-2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
        <div className={styles.projectCard}>
          <img src={proj2} alt="SR Multiple Disease Prediction System" />
          <h3>MDPS</h3>
          <p>Multiple Disease Prediction System</p>
          <a href="https://multiple-disease-predection-app-hmlqhfetxdfjlttpdd9nwz.streamlit.app/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
        {/* Add more project cards similarly */}
      </div>
    </section>
  );
}

export default Projects;


