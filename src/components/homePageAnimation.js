import React, { useState, useEffect, useRef } from "react";
import image1 from "../images/chrome-gallery-1-2x.webp";
import image2 from "../images/chrome-gallery-2-2x.webp";
import image3 from "../images/chrome-gallery-3-2x.webp";
import image4 from "../images/chrome-gallery-4-2x.webp";
import image5 from "../images/chrome-gallery-5-2x.webp";
import "../styles/homePageAnimation.css";

const HomePageAnimation = () => {
  const prevScrollTop = useRef(0);
  const [fastMove, setFastMove] = useState({
    x: 0,
    overflow: "hidden",
    scale: 1.7,
  });

  const [translate, setTranslate] = useState({
    box_1: {
      x: "70%",
      y: "0%",
      scale: 1,
      opacity: 1,
    },
    box_2: {
      x: "-70%",
      y: "3%",
      scale: 2,
      opacity: 1,
    },
    box_3: {
      x: 0,
      y: 0,
      scale: 1.2,
      opacity: 1,
    },
    box_4: {
      x: "70%",
      y: "3%",
      scale: 2,
      opacity: 1,
    },
    box_5: {
      x: "100%",
      y: 0,
      scale: 1,
      opacity: 0,
    },
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const isScrollingDown = scrollTop > prevScrollTop.current;
    prevScrollTop.current = scrollTop;
    let fastBox = document.getElementsByClassName("box1")[0];
    let fastBoxPosition = fastBox.getBoundingClientRect().top;
    const maxScale = 1.7;
    const minScale = 1;

    let scale = 1 + ((120 - fastBoxPosition) / 120) * 0.7;

    scale = Math.max(minScale, Math.min(maxScale, scale));

    const fastBoxScrollDown = 120 > fastBoxPosition;
    if (fastBoxScrollDown) {
      scale = Math.min(maxScale, scale - 0.2);
    } else {
      scale = Math.max(minScale, scale + 0.2);
    }

    if (fastBoxScrollDown) {
      setFastMove((prev) => ({
        ...prev,
        overflow: "auto",
        scale: scale,
      }));
    }

    const transformations = {
      box_1: {
        scrollDown: { x: "338%", y: "0%", scale: 1, opacity: 1 },
        scrollUp: { x: "-70%", y: "0%", scale: 1, opacity: 0 },
      },
      box_2: {
        scrollDown: { x: "-36%", y: "0%", scale: 1 },
        scrollUp: { x: "-70%", y: "3%", scale: 2 },
      },
      box_3: {
        scrollDown: { x: 0, y: 0, scale: 1 },
        scrollUp: { x: 0, y: 0, scale: 1.2 },
      },
      box_4: {
        scrollDown: { x: "0%", y: "0%", scale: 1 },
        scrollUp: { x: "70%", y: "3%", scale: 2 },
      },
    };

    const newTransforms = {};

    Object.keys(transformations).forEach((boxKey) => {
      const { x, y, scale, opacity } =
        transformations[boxKey][isScrollingDown ? "scrollDown" : "scrollUp"];
      newTransforms[boxKey] = { x, y, scale, opacity };
    });

    setTranslate((prev) => ({
      ...prev,
      ...newTransforms,
    }));
  };

  const handleLeft = () => {
    const currentX = parseInt(fastMove.x, 10);
    console.log(currentX + 100);
    if (currentX === 0) return;
    setFastMove((prev) => ({
      ...prev,
      x: `${currentX + 100}`,
    }));
  };

  const handleRight = () => {
    console.log(fastMove.x);
    if (parseInt(fastMove.x, 10) === -200) return;
    setFastMove((prev) => ({
      ...prev,
      x: `${prev.x - 100}`,
    }));
  };

  return (
    <>
      <div className="title">
        <h1>
          <span>The browser</span>
          <br />
          <span>built to be yours</span>
        </h1>
      </div>
      <div className="parent">
        <div className="container">
          <div
            className="box"
            style={{
              transform: `translate(${translate.box_1.x}, ${translate.box_1.y}) scale(${translate.box_1.scale})`,
              opacity: translate.box_1.opacity,
            }}
          >
            <img src={image1} style={{ height: "100%" }} />
          </div>
          <div
            className="box"
            style={{
              transform: `translate(${translate.box_2.x}, ${translate.box_2.y}) scale(${translate.box_2.scale})`,
              opacity: translate.box_2.opacity,
            }}
          >
            <img src={image2} style={{ height: "100%" }} />
          </div>
          <div
            className="box"
            style={{
              transform: `translate(${translate.box_3.x}, ${translate.box_3.y}) scale(${translate.box_3.scale})`,
              opacity: translate.box_3.opacity,
            }}
          >
            <img src={image3} style={{ height: "100%" }} />
          </div>
          <div
            className="box"
            style={{
              transform: `translate(${translate.box_4.x}, ${translate.box_4.y}) scale(${translate.box_4.scale})`,
              opacity: translate.box_4.opacity,
            }}
          >
            <img src={image4} style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageAnimation;
