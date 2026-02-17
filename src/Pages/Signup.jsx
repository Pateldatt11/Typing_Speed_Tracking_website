import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert('Please fill all fields');
      return;
    }

    const userData = {
      username: username.trim(),
      email: email.trim(),
      password,
      joined: new Date().toISOString(),
      bestWpm: 0,
      bestAccuracy: 0,
      testsCompleted: 0,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Account created successfully! Please log in.');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign Up - TypeRush</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;