import React, { useEffect } from "react";
import "../styles/static.css";
import { FaPlus } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AfterPhotos = () => {
  useEffect(() => {
    gsap.fromTo(
      ".groupicon",
      {
        opacity: 0.4,
        scale: 0.8,
        x: (index) => (index % 2 === 0 ? -100 : 100),
        y: (index) => (index % 2 === 0 ? 100 : -100),
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: ".staticContainer",
          start: "top center",
          end: "bottom center",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="staticContainer">
        <div>
          <h1>
            Extend your <br />
            experience
          </h1>
          <p>
            From shopping and entertainment to
            <br /> productivity, find extensions to improve your <br />{" "}
            experience in the Chrome Web Store.
          </p>
          <button>Explore extensions</button>
        </div>
        <div className="groupIconsAnime">
          <img
            src="https://www.google.com/chrome/static/images/dev-components/extensions-ui.png"
            alt="img"
          />
          <img
            src="https://www.google.com/chrome/static/images/dev-components/extensions-icon.png"
            alt="img1"
            className="groupicon group1"
          />
          <img
            src="https://www.google.com/chrome/static/images/dev-components/extensions-video.png"
            alt="img1"
            className="groupicon group2"
          />
          <img
            src="https://www.google.com/chrome/static/images/dev-components/extensions-paint.png"
            alt="img1"
            className="groupicon group3"
          />
          <img
            src="https://www.google.com/chrome/static/images/dev-components/extensions-person.png"
            alt="img1"
            className="groupicon group4"
          />
          <img
            src="https://www.google.com/chrome/static/images/dev-components/extensions-shop.png"
            alt="img1"
            className="groupicon group5"
          />
        </div>
      </div>
    </>
  );
};

export default AfterPhotos;
