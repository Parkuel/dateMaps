import React, { useState } from 'react';
import './ForgotPasswordPage.css'; // Create this file for styles
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false); // Track if email is sent
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // isSent to true but after API logic
    // API call logic here to send the recovery email

    setTimeout(() => {
        setIsSent(true);
      }, 2000); // Simulating a delay of 2 seconds
  
    //   setIsSent(true);

      setEmail('');
      setTimeout(() => {
        handleLoginRedirect();
      }, 4000);
    
    
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {isSent ? (
          <div className="success-message">
            Recovery email sent successfully!
            <br />
            Redirecting to login page...
          </div>
        ) : (
          <>
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
            <button type="submit" className="send-recovery-link-btn">Send Recovery Link</button>
          </>
        )}
        {isSent && (
        <div className="redirect-message">
          Please wait...
        </div>
      )}
      </form>
      
    </div>
  );
};

export default ForgotPasswordPage;
