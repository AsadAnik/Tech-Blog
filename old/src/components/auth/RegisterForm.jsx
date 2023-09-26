import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [profilePicture, setProfilePicture] = useState(null);
  // const [profilePictureButton, setProfilePictureButton] = useState("");
  // const inputRef = useRef(null);
  // const [passwordError, setPasswordError] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [emailExistsError, setEmailExistsError] = useState("");
  const inputRef = useRef();
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureButton, setProfilePictureButton] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(null);


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
    } else if (name === "email") {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailPattern.test(value)) {
        setEmailError("Email is invalid.");
      } else {
        setEmailError("");
      }
    }
    if (name === 'confirmPassword' && value !== formData.password) {
      setPasswordMatchError('Password not matched');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleProfilePictureChange = () => {
    inputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here

    if (!emailError) {
      try {
        const response = await fetch("/api/check-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.exists) {
            setEmailExistsError("This email is already in use.");
          } else {
            // Handle registration logic here
            console.log("Form data submitted:", formData);
          }
        } else {
          // Handle other response errors
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle network errors
      }
    }
    console.log("Form data submitted:", formData);
  };

  const newLocal = "../../";
  return (
    <div className="register-container">
      <div className="container">
        <div className="register-image">
         
        </div>
        <div className="register-form">
          <h2>Register</h2>
          <div>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileInputChange}
              ref={inputRef}
              style={{ display: "none" }}
            />
            <label
              htmlFor="profilePicture"
              className="profile-picture"
              onClick={handleProfilePictureChange}
            >
              <>
                <span>Click to Upload Profile Picture</span>
                <i className="fas fa-camera"></i>
              </>
            </label>
          </div>
          <div className="profile-picture-preview">
            {profilePicture && <img src={profilePicture} alt="Profile" />}
          </div>
          <div className="profile-picture-upload">{profilePictureButton}</div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {usernameError && (
                <span className="error-message">{usernameError}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-type your password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {passwordMatchError && (
                <span className="error-message">{passwordMatchError}</span>
              )}
            </div>
            <button type="submit">Join</button>

            <div className="form-link">
              <span>
                Already have an account?{" "}
                <Link to="/login" className="link login-link">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
