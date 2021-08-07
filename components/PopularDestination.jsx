import Slider from "./Slider"
import { useState,useEffect } from "react";
import styles from '../styles/Home.module.css';

const PopularDestination=()=> {
    const [width, setwidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
      if (process.browser) {
        setwidth(window.innerWidth);
      }
    }, []);
    return (
        <div> 
            <p className={styles.subTitle}>Popular Destination</p>
           <div style={{marginLeft: width > 542 ? '10%' : '6%',}}><Slider /></div>
        </div>
    )
}

export default PopularDestination
