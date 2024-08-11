import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Home_animy = () => {
  const panelsContainerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    console.log("Setting up GSAP animation...");

    const panelsContainer = panelsContainerRef.current;
    const panels = gsap.utils.toArray(".panel");

    console.log(`Number of panels: ${panels.length}`);

    panelsContainer.style.width = `${100 * panels.length}%`;

    tweenRef.current = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (panelsContainer.offsetWidth - window.innerWidth),
      },
    });

    console.log("GSAP animation setup complete");

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      console.log("GSAP animation cleaned up");
    };
  }, []);

  return (
    <div id="page" className="site">
      <main id="content" className="site-content" role="main">
        <section
          id="intro"
          className="full-screen pt-5 gradient-orange"
        ></section>

        <section id="panels">
          <div id="panels-container" ref={panelsContainerRef}>
            <div id="panel-1" className="panel full-screen gradient-green">
              <img
                src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp"
                alt="image1"
              />
            </div>
            <div id="panel-2" className="panel full-screen gradient-blue">
              <img
                src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp"
                alt="image1"
              />
            </div>
            <div id="panel-3" className="panel full-screen gradient-green">
              <img
                src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp"
                alt="image1"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home_animy;
