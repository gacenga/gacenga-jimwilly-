// src/components/MovingLines.js
import React, { useEffect, useRef } from 'react';
import './MovingLines.css';

const MovingLines = () => {
  const lineRef = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    lineRef.current.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust speed here
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="moving-lines">
      <div className="line" ref={lineRef}></div>
    </div>
  );
};

export default MovingLines;
