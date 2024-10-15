// src/components/DynamicLines.js
import React, { useEffect, useState } from 'react';
import './DynamicLines.css';

const DynamicLines = ({ sectionId }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold for when to trigger
    );

    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId]);

  return (
    <div className={`dynamic-line ${isVisible ? 'filled' : ''}`}>
      {/* Optional: You can add V-shape or other styles here */}
    </div>
  );
};

export default DynamicLines;
