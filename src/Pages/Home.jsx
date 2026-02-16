import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
     
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>NEW</span> 100% Free Typing Test
          </div>

          <h1 className="hero-title">
            TYPE <span className="highlight">FASTER</span><br />
            <span className="glow-text">BECOME UNSTOPPABLE</span>
          </h1>

          <p className="hero-subtitle">
            Test your typing speed in real-time.<br />
            Track progress. Compete with friends.
          </p>

          <div className="hero-buttons">
            <Link to="/test">
              <button className="primary-btn">
                START TYPING NOW
                <span className="btn-arrow">→</span>
              </button>
            </Link>

            <Link to="/leaderboard">
              <button className="secondary-btn">VIEW LEADERBOARD</button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">142k+</span>
              <span className="stat-label">Tests Taken</span>
            </div>
            <div className="stat">
              <span className="stat-number">98.4</span>
              <span className="stat-label">Avg Accuracy</span>
            </div>
            <div className="stat">
              <span className="stat-number">183</span>
              <span className="stat-label">WPM Record</span>
            </div>
          </div>
        </div>

        
        <div className="keyboard-visual">
          <div className="keys">
            <span className="key">Q</span>
            <span className="key active">W</span>
            <span className="key">E</span>
            <span className="key active">R</span>
            <span className="key">T</span>
          </div>
        </div>
      </section>

      
      <section className="features">
        <h2 className="section-title">Why Typists Love TypeRush</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Feedback</h3>
            <p>Instant WPM, accuracy &amp; error tracking</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Multiple Languages</h3>
            <p>English, Hindi, Gujarati &amp; 12 more</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Global Leaderboard</h3>
            <p>Compete with top typists worldwide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Progress Tracking</h3>
            <p>Weekly reports &amp; improvement graphs</p>
          </div>
        </div>
      </section>

 
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to break your record?</h2>
          <p>Join 142,000+ typists improving daily</p>
          <Link to="/test">
            <button className="big-cta-btn">START FREE TEST →</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;