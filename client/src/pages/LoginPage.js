import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication logic will go here
    console.log('Email:', email);
    console.log('Password:', password);
    
    // on successful login, navigate to the home page
    navigate('/home');
  };

  const handleForgotPassword = () => {
    // redirect to a forgot password page
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="forgot-password">
        <button className="forgot-password-btn" onClick={handleForgotPassword}>
          Forgot Password?
        </button>
      </div>
      </form>
      
    </div>
  );
};

export default LoginPage;
