import React from 'react';
import './ProjectLightbox.css';

const ProjectLightbox = ({ imgSrc, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={imgSrc} alt="Project" />
    </div>
  );
};

export default ProjectLightbox;
