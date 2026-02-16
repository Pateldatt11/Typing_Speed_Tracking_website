import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './Nav.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        <Link to="/" className="logo">
          <span className="logo-text">TYPE</span>
          <span className="logo-rush">RUSH</span>
        </Link>

        
        <div className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/test" className="nav-link">Test</Link></li>
            <li><Link to="/leaderboard" className="nav-link">Leaderboard</Link></li>
            <li><Link to="/profile" className="nav-link">Profile</Link></li>
          </ul>
        </div>

       
        <div className="nav-actions">
          <Link to="/test">
            <button className="start-btn">
              START TYPING
              <span className="btn-glow"></span>
            </button>
          </Link>

          <Link to="/profile">
            <button className="profile-btn">Sign Up</button>
          </Link>
        </div>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

       
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/test" onClick={() => setIsMenuOpen(false)}>Test</Link></li>
          <li><Link to="/leaderboard" onClick={() => setIsMenuOpen(false)}>Leaderboard</Link></li>
          <li><Link to="/profile" onClick={() => setIsMenuOpen(false)}>Sign Up</Link></li>
          <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;