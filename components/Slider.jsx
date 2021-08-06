import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RoomIcon from '@material-ui/icons/Room';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Slider (props){
  const [width, setwidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (process.browser) {
      setwidth(window.innerWidth);
    }
  }, []);

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: width>1024?3.2:width>500?2.2:1.2,
    spacing: 20,
    initial: 0,
    // loop:true
  });

  return (
    <>
    <div style={{position:'relative',width:'80%'}}>
      <div style={{}}  ref={sliderRef} className="keen-slider" id={styles.popular_img_id}>
        <div className="keen-slider__slide">
            <Image src='/pokhara.jpeg' width={400} height={300} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Pokhara <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image src='/kathmandu.jpg' width={400} height={300} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Kathmandu <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image src='/chitwan.jpg' width={400} height={300} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Chitwan <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image src='/lumbini.png' width={400} height={300} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Lumbini <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image src='/mustang.jpg' width={400} height={300} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Mustang <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image src='/Rasuwa.jpg' width={400} height={300} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Rasuwa  <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
      </div>
      <button
        style={{ padding: "10px",borderRadius:'50%',display:width>1000?'flex':'none',justifyContentL:'center',alignItems:'center',position:'absolute',left:'-15px',top:'35%',cursor:'pointer',outline:'none', border:'none',background:'white',color:'#008bfc', boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.03)',
WebkitBoxShadow: '0px 0px 8px 2px rgba(0,0,0,0.03)',
MozBoxShadow: '0px 0px 8px 2px rgba(0,0,0,0.03)', }}
        onClick={(e) => e.stopPropagation() || slider.prev()}
      >
        <ArrowBackIosIcon  style={{fontSize:'1.1rem',position:'relative',left:'3px'}} />
      </button>
      <button
        style={{ padding: "10px",borderRadius:'50%',display:width>1000?'flex':'none',justifyContentL:'center',alignItems:'center',position:'absolute',right:'-5px',top:'35%',cursor:'pointer',outline:'none', border:'none',background:'white',color:'#008bfc', boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.03)',
WebkitBoxShadow: '0px 0px 8px 2px rgba(0,0,0,0.03)',
MozBoxShadow: '0px 0px 8px 2px rgba(0,0,0,0.03)', }}
        onClick={(e) => e.stopPropagation() || slider.next()}
      >
        <ArrowForwardIosIcon style={{fontSize:'1.1rem'}} />
      </button>
      </div>
    </>
  );
};
