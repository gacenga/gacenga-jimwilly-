import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <section className="bio">
      <h2>About Me</h2>
      <img src="/assets/your_picture.jpg" alt="Your Name" className="profile-pic" />
      <p>Hello! I'm a software engineer with a passion for technology and innovation. Welcome to my portfolio!</p>
    </section>
  );
};

export default Bio;
