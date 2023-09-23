import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
// import { registerRequest } from "../../API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/authAction";

const Register = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, success, message } = useSelector((state) => state?.userRegister);

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
      navigate("/")
    }
  }, [success, navigate]);

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

    if (name === "name") {
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
    if (name === "confirmPassword" && value !== formData.password) {
      setPasswordMatchError("Password not matched");
    } else {
      setPasswordMatchError("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // start loading..

    // Handle registration logic here
    // registerRequest({
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password,
    // });

    dispatch(
      registerAction({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );
    // .then((res) => {
    //   if (res.success) {
    //     setCookie("authToken", res?.user?.token, 1);
    //     navigate("/");
    //     setLoading(false);
    //   }
    //   if (!res.success) {
    //     toast.error(res.message, {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 5000,
    //     });
    //     setLoading(false);
    //   }

    //   // Navigate('/login')
    // })
    // .catch((e) => {
    //   toast.error(res.message, {
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 5000,
    //   });
    // });
  };

  return (
    <div className={styles.registerContainer}>
      <ToastContainer />
      <div className={styles.containerRegister}>
        <div className={styles.registerImage}></div>
        <div className={styles.registerForm}>
          <h2 className={styles.registerForm.h2}>Register</h2>
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
              className={styles.profilePicturePreview}
              onClick={handleProfilePictureChange}
            >
              <>
                <span className={styles.formLink.span}>
                  Click to Upload Profile Picture
                </span>
                <i className="fas fa-camera"></i>
              </>
            </label>
          </div>
          <div className={styles.profilePicturePreview}>
            {profilePicture && <img src={profilePicture} alt="Profile" />}
          </div>
          {/* <div className={styles.profilePicturePreview}>{profilePictureButton}</div> */}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroupRegister}>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {usernameError && (
                <span className={styles.Error}>{usernameError}</span>
              )}
            </div>
            <div className={styles.formGroupRegister}>
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
              {emailError && <span className={styles.Error}>{emailError}</span>}
              {emailExistsError && (
                <span className={styles.Error}>{emailExistsError}</span>
              )}
            </div>
            <div className={styles.formGroupRegister}>
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
                <span className={styles.Error}>{passwordError}</span>
              )}
            </div>
            <div className={styles.formGroupRegister}>
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
                <span className={styles.Error}>{passwordMatchError}</span>
              )}
            </div>
            <button
              className={styles.buttonRegister}
              type="submit"
              disabled={loading}
            >
              {!loading ? "Join" : "Please Wait..."}
            </button>

            <div className={styles.formLink}>
              <span>
                Already have an account?
                <Link to="/login" className={styles.formLink.a}>
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
