import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleContinueWithEmail = () => {
    // Add your logic here for handling the email input and initiating the code sending process
    console.log('Email:', email);
    // You can also trigger sending a code to the provided email here
  };

  const handleContinueWithCode = () => {
    // Add your logic here for handling the code input and proceeding to the next step
    console.log('Code:', code);
    // You can check the provided code against the sent code and proceed accordingly
  };

  const handleSetNewPassword = () => {
    // Add your logic here for setting a new password
    console.log('New Password:', newPassword);
    // You can update the user's password with the new one here
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Forgot Password?</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />

        {/* Code Input */}
        <input
          type="text"
          placeholder="Enter the code from your email"
          value={code}
          onChange={handleCodeChange}
        />

        {/* New Password Input */}
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />

        {/* Continue Buttons */}
        <button onClick={handleContinueWithEmail}>Continue with Email</button>
        <button onClick={handleContinueWithCode}>Continue with Code</button>
        <button onClick={handleSetNewPassword}>Set New Password</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
