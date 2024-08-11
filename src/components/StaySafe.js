import React from "react";
import { FaPlus } from "react-icons/fa";
import "../styles/static.css";

const StaySafe = () => {
  return (
    <div className="staySafe">
      <h1>
        Stay <span>safe</span> <br />
        while you browse
      </h1>
      <div className="boxes">
        <div className="boxTop">
          <div className="box1 box">
            <p>PASSWORD MANAGER</p>
            <h1>Use strong passwords on every site.</h1>
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2.webp"
              alt="img"
            />
            <div className="icon white">
              <FaPlus />
            </div>
          </div>
          <div className="box2 box">
            <p>SAFETY CHECK</p>
            <h1>Check your safety level in real time with just one click.</h1>
            <div className="icon blue">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="boxBottom">
          <div className="box3 box">
            <p>ENHANCED SAFE BROWSING</p>
            <h1>
              Browse with the confidence that you're staying safer online.
            </h1>
            <div className="icon blue">
              <FaPlus />
            </div>
          </div>
          <div className="box4 box">
            <p>PRIVACY GUIDE</p>
            <h1>
              Keep your privacy under your control with easy-to-use settings.
            </h1>
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp"
              alt="img"
            />
            <div className="icon white">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaySafe;
