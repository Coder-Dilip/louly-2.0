import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MaterialUIPickers from '../components/demo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PopularDestination from '../components/PopularDestination';
import Whyus from "./Whyus";
import Services from "./Services";
import Footer from "../components/Footer";
import BannerSlider from "./BannerSlider";


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
    <>
    <div style={{marginBottom:'10px'}}>
      <div className={styles.landingPageImg} style={{ width: "100%" }}>
      <div style={{display:'flex',alignItems:'center',cursor:'pointer',marginLeft: width > 542 ? "8.5%" : "2%",color:'white',fontSize:'1.5rem',width:'200px',borderRadius:'3px',height:'40px',position:'relative', top:'40px'}}><p  style={{position:'relative',left:'20px'}} className={styles.explore_btn}>Explore Now</p><ArrowForwardIcon style={{position:'relative',left:'20px'}}/></div>
        <div
          className={styles.titleContainer}
          style={{ display:'flex', flexDirection:'column',justifyContent:'center',height:'100vh',marginTop:'10px' }}
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
<div onClick={()=>window.location.href='/#popularDestination'} className={styles.animated_arrow} style={{display:width>842?'flex':'none',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
      {[0,1,2].map((item,i)=><ExpandMoreIcon key={i} className={i==0?styles.firstChild:i==1?styles.secondChild:styles.thirdChild} style={{marginBottom:'-24px',height:'35px',width:'35px'}} />) }
      </div>
          </div>
       
        </div>
      </div>
    </div>
    <div id='popularDestination' style={{marginTop:width>542?'50px':'250px',marginBottom:'50px'}}>
<PopularDestination />
</div>

  <Whyus />

  <Services />

<div style={{display:width>800?'block':'none', position:'relative', left:width>542?'10%':'6%'}}><BannerSlider /></div>
  



</>
  );
}

export default LandingPage;
