import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="title">Date Map</h1>
        <button className="get-started-btn">Get Started {'>'}</button>
      </div>
    </div>
  );
};

export default LandingPage;
