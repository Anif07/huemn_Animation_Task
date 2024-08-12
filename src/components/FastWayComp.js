import React from "react";
import video from "../images/non-chrome.mp4";
import styles from "../styles/fastWayStyles.module.css";
import slide1img from "../images/slide1img.png";

const FastWayComp = () => {
  return (
    <div className={styles.fastWayContainer}>
      <h1>
        The <span>fast</span> way to do
        <br /> things online
      </h1>
      <div className={styles.slidingShow}>
        <div className={styles.slide1}>
          <div>
            <h3>Prioritise performance</h3>
            <div>
              <p>
                Chrome is built for performance. Optimise your experience with
                features like Energy Saver and Memory Saver.
              </p>
              <p className={styles.paraBlue}>
                Learn more about Memory and Energy Saver
              </p>
            </div>
          </div>
          {/* <img src={slide1img} alt="img1" /> */}
          <video width="950" height="400" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={styles.slide2}>
          <div>
            <h3>Stay on top of tabs</h3>
            <p>
              Chrome has tools to help you manage the tabs you’re not quite
              ready to close. Group, label, and colour-code your tabs to stay
              organised and work faster.
            </p>
          </div>
          <img
            src="https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.webp"
            alt="img2"
          />
        </div>
        <div className={styles.slide3}>
          <div>
            <h3>Optimised for your device</h3>
            <p>
              Chrome is built to work with your device across platforms. That
              means a smooth experience on whatever you're working with.
            </p>
          </div>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/homepage/fast/devices_desktop.webp"
              alt="img3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastWayComp;
