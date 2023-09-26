import React from "react";
import "./styles.css";

const Header = () => (
  <header className="home-header">
    <nav className="top-navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </nav>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <div className="category-box">
      <ul>
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  </header>
);

export default Header;
