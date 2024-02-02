import React from 'react';
import '../styles/LandingPage.css';
import Nav from '../components/Nav.jsx'


const LandingPage = () => {
  return (
    <div className="container">
      <Nav />
      <h1 className="header">Welcome to Our Special Day</h1>
      <p className="subtext">Join us in celebrating love and friendship.</p>
      <button className="ctaButton" onClick={() => alert('Thank you for your interest!')}>
        RSVP Now
      </button>
    </div>
  );
};

export default LandingPage;
