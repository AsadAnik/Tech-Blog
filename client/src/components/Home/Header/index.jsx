import React,{useEffect} from "react";
import "./styles.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { logoutRequest } from "../../../API";
import { deleteCookie } from "../../../utils/cookieUtils";
import { logoutAction } from "../../../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { success, message } = useSelector((state) => state.userLogout);

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
      navigate("/register");
      deleteCookie("authToken")
    }
  }, [success, navigate]);


  const onLogout = () => {
    // logoutAction().then((res) => {
    //   console.log(res);
    //  if(res?.success){
    //   console.log('response form logout ', res);
    //   deleteCookie('authToken')
    //   navigate('/register')
    //  }
    //  if(!res?.success){
    //   toast.error(res?.message, {
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 5000,
    //   })
    //  }
    // })
    // .catch((error) => {
    //   console.log("Logout Error -- ", error);
    // })
    dispatch(logoutAction());
  };

  return (
    <header className="home-header">
      <ToastContainer />
      <nav className="top-navbar">
        <ul className="left-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <ul className="right-links">
          <li className="user-dropdown">
            <div className="dropdown">
              <button className="dropbtn">userName</button>
              <div className="dropdown-content">
                <button onClick={onLogout}>Logout</button>
                <button onClick={() => alert("Profile")}>Profile</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <h1>
        <span>“</span> Blog <span>”</span>
      </h1>
      <div className="category-box">
        <ul>
          <li>
            <a href="#">Category 1</a>
          </li>
          <li>
            <a href="#">Category 2</a>
          </li>
          <li>
            <a href="#">Category 3</a>
          </li>
          {/* Add more categories as needed */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
