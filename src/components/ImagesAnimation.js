import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/imagesAnimation.css";
import image1 from "../images/photosanime1.jpg";
import image2 from "../images/photosanime2.jpg";
import image3 from "../images/photosanime3.jpg";

const ImagesAnimation = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    const images = [image1, image2, image3]; // Array of images

    gsap.utils.toArray(sectionsRef.current).forEach((section, i) => {
      const bg = section.querySelector(".imagesAnimebg");

      if (bg && i < images.length) {
        bg.style.backgroundImage = `url(${images[i]})`; // Apply images in order

        gsap.fromTo(
          bg,
          {
            backgroundPosition: () =>
              i
                ? `50% ${-window.innerHeight * getRatio(section)}px`
                : "50% 0px",
          },
          {
            backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="imagesanimationcontainer">
      <section ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="imagesAnimebg"></div>
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="imagesAnimebg"></div>
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="imagesAnimebg"></div>
      </section>
    </div>
  );
};

export default ImagesAnimation;
