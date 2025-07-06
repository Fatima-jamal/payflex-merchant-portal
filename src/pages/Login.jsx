import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [mid, setMid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mid, password }),
      });

      if (response.ok) {
        localStorage.setItem('merchantLoggedIn', 'true');
        localStorage.setItem('merchantMID', mid);
        navigate('/dashboard');
      } else {
        const text = await response.text();
        setError(text);
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="overlay" />
      <form className="login-box" onSubmit={handleLogin}>
        <h2>PayFlex</h2>
        <h4 className="portal-title">Secure Merchant Portal Access</h4>

        <input
          type="text"
          placeholder="MID"
          value={mid}
          onChange={(e) => setMid(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
