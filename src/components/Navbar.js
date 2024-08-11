import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbarr">
      <div className="navFirstBox">
        <img
          src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
          alt="chrome"
        />
        <h1>Chrome</h1>
      </div>
      <div className="navSecondBox">
        <ul>
          <li>Home</li>
          <li>The Browser by Google</li>
          <li>Features</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
