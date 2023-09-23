import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
// import {loginRequest} from '../../API'
import { useNavigate, Link } from "react-router-dom";
// import {setCookie} from '../../utils/cookieUtils'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nameOrEmail: "",
    password: "",
  });

  const { loading, success, message } = useSelector((state) => state.user);

  useEffect(() => {
    if (!success) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }

    if (success) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      navigate("/");
    }
  }, [success, navigate]);

  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  // const [email, setEmail] = useState("");
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
    if (name === "nameOrEmail") {
      if (value.length < 3) {
        setUsernameError("Username should be at least 3 characters.");
      } else if (value.length > 30) {
        setUsernameError("Username should not exceed 30 characters.");
      } else {
        setUsernameError("");
      }
    }
    if (!email) {
      setEmailError("Email is required.");
    } else {
      setEmailError(""); // Reset the email error when it's valid
    }

    // Example of setting an email exists error
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // With Redux..
    dispatch(loginAction(formData));
  };

  return (
    <div className={styles.loginContainer}>
      <ToastContainer />
      <div className={styles.containerLogin}>
        <div className={styles.loginImage}></div>
        <div className={styles.loginForm}>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroupLogin}>
              <label htmlFor="email">Email or Username</label>
              <input
                type="text"
                placeholder="Enter your email or username"
                id="email"
                name="nameOrEmail"
                value={formData.nameOrEmail}
                onChange={handleChange}
                required
              />
              {usernameError && (
                <span className={styles.registerError}>{usernameError}</span>
              )}
              {emailError && (
                <span className={styles.registerError}>{emailError}</span>
              )}
              {emailExistsError && (
                <span className={styles.registerError}>{emailExistsError}</span>
              )}
            </div>
            <div className={styles.formGroupLogin}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                // className={usernameError ? styles.error : ""}
              />
              {passwordError && (
                <span className={styles.loginError}>{passwordError}</span>
              )}
              <div className={styles.formLink}>
                <a href="#" className="forgot-pass">
                  <Link to="/forgotpassword" className={styles.formLink.span}>
                    Forgot Password
                  </Link>
                </a>
              </div>
            </div>

            <button
              className={styles.loginBtn}
              type="submit"
              disabled={loading}
            >
              {!loading ? "Login" : "Please Wait.."}
            </button>
          </form>
          <div className={styles.formLink}>
            <span className={styles.formLink.a}>
              Don't have an account?{" "}
              <Link to="/Register" className={styles.formLink}>
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
