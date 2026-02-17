import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <h1>TypeRush Profile</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="avatar">{user.username?.[0]?.toUpperCase() || '?'}</div>

        <h2>{user.username}</h2>
        <p className="email">{user.email}</p>

        <div className="stats">
          <div>
            <strong>Best WPM:</strong> {user.bestWpm || 0}
          </div>
          <div>
            <strong>Best Accuracy:</strong> {user.bestAccuracy || 0}%
          </div>
          <div>
            <strong>Tests Completed:</strong> {user.testsCompleted || 0}
          </div>
          <div>
            <strong>Joined:</strong>{' '}
            {new Date(user.joined).toLocaleDateString()}
          </div>
        </div>

        <button className="start-btn" onClick={() => navigate('/test')}>
          Start Typing Test
        </button>
      </div>
    </div>
  );
};

export default Profile;