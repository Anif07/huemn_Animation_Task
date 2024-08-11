import React from "react";
import "../styles/discover.css";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover-box1">
        <h1>
          Discover the latest <br />
          updates from Chrome
        </h1>
      </div>
      <div className="discover-box2">
        <div className="discover-left">
          <div className="discoverUpper">
            <p>Updates</p>
            <h1>Automatic updates</h1>
            <p>
              There's a new Chrome release every four weeks, making it easy to
              have the newest features and a faster, safer web browser.
            </p>
            <p className="paraBlue">Learn about automatic updates</p>
          </div>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png"
              alt="imag"
            />
          </div>
        </div>
        <div className="discover-right">
          <div className="discoverUpper">
            <p>Latest</p>
            <h1>New from Chrome</h1>
            <p>
              Chrome regularly updates with tools and features that make it
              faster and easier to use.
            </p>
            <p className="paraBlue">Learn what's new on Chrome</p>
          </div>
          <div className="discoverUpper-Box2">
            <img
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
              alt="imag"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
