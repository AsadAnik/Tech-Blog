import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [emailExistsError, setEmailExistsError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "password") {
      if (value.length < 8) {
        setPasswordError("Password should be at least 8 characters.");
      } else {
        setPasswordError("");
      }
    }
    if (name === "username") {
      if (value.length < 3) {
        setUsernameError("Username should be at least 3 characters.");
      } else if (value.length > 30) {
        setUsernameError("Username should not exceed 30 characters.");
      } else {
        setUsernameError("");
      }
    }
    if (!email) {
      setEmailError('Email is required.');
    } else if (!isValidEmail(email)) { // Replace isValidEmail with your email validation logic
      setEmailError('Invalid email format.');
    } else {
      setEmailError(''); // Reset the email error when it's valid
    }
    
    // Example of setting an email exists error
    if (isEmailExists(email)) { // Replace isEmailExists with your email existence check logic
      setEmailExistsError('Email already exists.');
    } else {
      setEmailExistsError(''); // Reset the email exists error when it's not found
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Form data submitted:", formData);
  };

  const newLocal = "../../";
  return (
    <div className="login-container">
      <div className="container">
        <div className="login-image">
          
        </div>
        <div className="login-form">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email or Username</label>
              <input
                type="email"
                placeholder="Enter your email or username"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {usernameError && (
                <span className="error-message">{usernameError}</span>
              )}
              {emailError && (
                <span className="error-message">{emailError}</span>
              )}
              {emailExistsError && (
                <span className="error-message">{emailExistsError}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {passwordError && (
                <span className="error-message">{passwordError}</span>
              )}
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  <Link to="/forgotpassword" className="link login-link">
                    Forgot Password
                  </Link>
                </a>
              </div>
            </div>

            <button className="login-btn" type="submit">Login</button>
          </form>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <Link to="/Register" className="link login-link">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
