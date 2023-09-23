import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import LoginScreen from "../components/auth/LoginForm";
import RegisterScreen from "../components/auth/RegisterForm";

const PublicRoute = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" exact element={<Blog />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/register" exact element={<RegisterScreen />} />
        </Routes>
      </Router>
  );
};
export default PublicRoute;
