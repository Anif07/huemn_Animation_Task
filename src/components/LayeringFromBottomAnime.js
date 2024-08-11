import React, { useEffect, useRef } from "react";
import styles from "../styles/layeredFromBottom.module.css"; // Ensure path is correct

const LayeringFromBottomAnime = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = containerRef.current.querySelectorAll(`.${styles.panel}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.hidden);
          } else {
            entry.target.classList.add(styles.hidden);
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    panels.forEach((panel) => {
      panel.classList.add(styles.hidden);
      observer.observe(panel);
    });

    return () => {
      panels.forEach((panel) => observer.unobserve(panel));
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={`${styles.description} ${styles.panel} ${styles.blue}`}>
        <div>
          <h1>Layered pinning from bottom</h1>
          <p>
            A simple example where overlapping panels reveal from the bottom.
          </p>
          <div className={styles.scrollDown}>
            Scroll down
            <div className={styles.arrow}></div>
          </div>
        </div>
      </div>

      <section className={`${styles.panel} ${styles.red}`}>
        <div>ONE</div>
      </section>
      <section className={`${styles.panel} ${styles.orange}`}>
        <div>TWO</div>
      </section>
      <section className={`${styles.panel} ${styles.purple}`}>THREE</section>
    </div>
  );
};

export default LayeringFromBottomAnime;
