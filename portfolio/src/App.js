import React, { useState } from 'react';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Quotes from './components/Quotes';
import Bio from './components/Bio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  // State to track the currently visible component
  const [visibleComponent, setVisibleComponent] = useState('bio');

  // Function to render the appropriate component based on the state
  const renderComponent = () => {
    switch (visibleComponent) {
      case 'bio':
        return <Bio />;
      case 'quotes':
        return <Quotes />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Main Content Area */}
      <div className="book-container flex-grow-1 overflow-hidden p-4">
        {/* Header with Name and Picture */}
        <div className="text-center mb-4">
          <img
            src="your-image-url.jpg" // Replace with your image URL
            alt="Your Name"
            className="rounded-circle profile-pic"
          />
          <h1 className="my-name">Gacenga Jimwilly Murimi</h1> {/* Your Name */}
          <h3 className="my-title">Software Engineer</h3> {/* Your Title */}
        </div>

        {/* Card for displaying the active component */}
        <div className="card mb-4 fixed-card">
          <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}> {/* Set a max height */}
            {renderComponent()}
          </div>
        </div>
      </div>

      {/* Vertical Navbar Directly in App.js */}
      <nav className="navbar navbar-dark bg-dark flex-column" style={{ width: '250px', position: 'fixed', top: 0, right: 0, height: '100vh', padding: '20px' }}>
        <div className="navbar-nav">
          <a className="nav-link card mx-2 mb-2" onClick={() => setVisibleComponent('bio')}>Bio</a>
          <a className="nav-link card mx-2 mb-2" onClick={() => setVisibleComponent('quotes')}>Quotes</a>
          <a className="nav-link card mx-2 mb-2" onClick={() => setVisibleComponent('resume')}>Resume</a>
          <a className="nav-link card mx-2 mb-2" onClick={() => setVisibleComponent('portfolio')}>Portfolio</a>
          <a className="nav-link card mx-2 mb-2" onClick={() => setVisibleComponent('blog')}>Blog</a>
        </div>
      </nav>

      {/* Fixed Contact Section at the Bottom */}
      <div className="fixed-bottom">
        <Contact />
      </div>
    </div>
  );
};

export default App;
