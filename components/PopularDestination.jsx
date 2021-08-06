import Slider from "./Slider"
import { useState,useEffect } from "react";
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
            <p style={{fontWeight:'bolder',fontFamily:'sans-serif',fontSize:width>500?'2.5rem':'1.8rem',textAlign:'center',position:'relative',left:width<500?'-20px':'0'}}>Popular Destination</p>
           <div style={{marginLeft: width > 542 ? '10%' : '6%',}}><Slider /></div>
        </div>
    )
}

export default PopularDestination
