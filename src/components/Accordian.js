import React, { useEffect, useState } from "react";
import "../styles/accordian.css";
import accordianImg1 from "../images/accordian1.png";

const Accordian = () => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentId((prev) => (prev === 2 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  const images = [
    accordianImg1,
    "https://www.google.com/chrome/static/images/v2/accordion-timed/tab-sync.webp",
    "https://www.google.com/chrome/static/images/v2/accordion-timed/autofill.webp",
  ];

  const data = [
    {
      title: "Customise your Chrome",
      description:
        "Personalise your web browser with themes, dark mode and other options built just for you.",
    },
    {
      title: "Browse across devices",
      description:
        "Sign in to Chrome on any device to access your bookmarks, saved passwords and more.",
    },
    {
      title: "Save time with autofill",
      description:
        "Use Chrome to save addresses, passwords and more to quickly autofill your details.",
    },
  ];

  return (
    <div className="accord-cont">
      <div className="accod-left">
        <div>
          <img src={images[currentId]} alt="img" />
        </div>
      </div>
      <div className="accod-right">
        <div>
          {data.map((obj, index) => (
            <div key={index} onClick={() => setCurrentId(index)}>
              <h2>{obj.title}</h2>
              {currentId === index && <p>{obj.description}</p>}
            </div>
          ))}
        </div>
        <div>
          <button className="accod-btn">sign in to get started</button>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
