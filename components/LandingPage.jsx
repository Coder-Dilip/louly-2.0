import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
function LandingPage() {
  const [width, setwidth] = useState(0);

  useEffect(() => {
    if (process.browser) {
      setwidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      if (process.browser) {
        window.location.reload();
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      <div className={styles.landingPageImg} style={{ width: "100%" }}>
        <div
          className={styles.titleContainer}
          style={{ position: "relative", top: width > 542 ? "30%" : "75%" }}
        >
          <p className={styles.pageTitle}>
            Hey Buddy! Where are you{" "}
            <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
              Travelling
            </span>{" "}
            to?
          </p>
          <div
            className={styles.destinationContainer}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
