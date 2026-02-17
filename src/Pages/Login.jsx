import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = localStorage.getItem('user');
    if (!stored) {
      alert('No account found. Please sign up first.');
      return;
    }

    const user = JSON.parse(stored);

    if (user.email === email.trim() && user.password === password) {
      alert('Welcome back!');
      navigate('/test');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login to TypeRush</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;