import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MaterialUIPickers from '../components/demo'
function LandingPage() {
  const [width, setwidth] = useState(0);

  useEffect(() => {
    if (process.browser) {
      setwidth(window.innerWidth);
    }
  }, []);

  // useEffect(() => {
  //   function handleResize() {
  //     if (process.browser) {
  //       window.location.reload();
  //     }
  //   }
  //   window.addEventListener("resize", handleResize);
  // });

  return (
    <div>
      <div className={styles.landingPageImg} style={{ width: "100%" }}>
      <div style={{display:'flex',alignItems:'center',cursor:'pointer',marginLeft: width > 542 ? "8.5%" : "2%",color:'white',fontSize:'1.5rem',width:'200px',borderRadius:'3px',height:'40px',position:'relative', top:'70px'}}><p  style={{position:'relative',left:'20px'}} className={styles.explore_btn}>Explore Now</p><ArrowForwardIcon style={{position:'relative',left:'20px'}}/></div>
        <div
          className={styles.titleContainer}
          style={{ position: "relative", top: width > 542 ? "25%" : "60%" }}
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
          >
<MaterialUIPickers/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
