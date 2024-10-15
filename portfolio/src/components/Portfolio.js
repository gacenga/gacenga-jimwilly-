import React, { useState } from 'react';
import ProjectLightbox from './ProjectLightbox';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1.', imgSrc: '/assets/project1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description of project 2.', imgSrc: '/assets/project2.jpg' },
    { id: 3, title: 'Project 3', description: 'Description of project 3.', imgSrc: '/assets/project3.jpg' },
  ];

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      {projects.map(project => (
        <div key={project.id} className="project-card" onClick={() => openLightbox(project.imgSrc)}>
          <img src={project.imgSrc} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
      {selectedImage && <ProjectLightbox imgSrc={selectedImage} onClose={closeLightbox} />}
    </section>
  );
};

export default Portfolio;
