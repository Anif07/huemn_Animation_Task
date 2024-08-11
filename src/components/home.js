import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <img
          src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
          alt="chrome"
        />
        <h1 className="home-heading">
          The browser <br />
          built to be yours
        </h1>
        <div className="home-nav">
          <span>updates</span>
          <span>Yours</span>
          <span>Safe</span>
          <span>Fast</span>
          <span>By Google</span>
        </div>
        <p className="homeDownloadLink">
          Need the Chrome installer? <a href="">Download here</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
