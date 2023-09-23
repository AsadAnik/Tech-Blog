import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import {getCookie} from '../utils/cookieUtils'

// Replace with your authentication logic
const isAuthenticated = () => {
  // Implement your authentication logic here
  // Example: Check if the user is authenticated and return true or false
  // You can store the user's authentication status in a state, Redux, or a context provider
  return true; // Change this based on your authentication logic
};

const ProtectedRoute = ({ element }) => {
    const [loggedin, setLoggedin] = useState()
    useEffect(() => {
        const token = getCookie('authToken')
    },[])

    useEffect(() => {
        
    },[Navigate])

  if (!isAuthenticated()) {

    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected content if the user is authenticated
  return element;
};

export default ProtectedRoute;
