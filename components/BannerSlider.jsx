
import { useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, {
    Autoplay,Pagination,Navigation, EffectFade
  } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])
import styles from '../styles/Home.module.css';


const SliderComponent=({ img, title, subtitle, buttonText, color })=>{
return (
  <div> 
  <div className={styles.bannerContainer} style={{position:'relative', width:'80%', height:'300px',margin:'auto', marginTop:'10px', marginBottom:'10px'}}>
<Image priority={true} className={styles.roundedbanner} src={img}  layout='fill' objectFit='cover' />
<div style={{display:'flex', justifyContent:'center'}}>
<div style={{position:'absolute',height:'100%', width:'90%',display:'flex', justifyContent:'space-between'}}>

<div style={{marginTop:'13%'}}>
<p style={{color:color}}><span style={{fontWeight:'bold', fontFamily:'sans-serif', fontSize:'30px'}}>{title}</span> <br /> <em style={{fontWeight:'bold', position:'relative', top:'3px'}}>{subtitle}</em></p>
<button style={{background:'black', borderRadius:'3px', padding:'8px 20px', outline:'none', border:'none', color:'white', fontWeight:'bold',cursor:'pointer',marginTop:'5px'}}>{buttonText}</button>
</div>
</div>
</div>
</div>
</div>
)
}

const BannerSlider = () => {
    const [perview, setperview] = useState(0)
    useEffect(()=>{
       setperview(1) 
    },[])

    const [width, setwidth] = useState(0);
    useEffect(() => {
      if (process.browser) {
        setwidth(window.innerWidth);
      }
    }, []);

  return (
      <div style={{ width:'80%', margin:'auto', marginTop:width>1200?'100px':'50px'}}>
          <p className={styles.subTitle} style={{ marginBottom:'50px'}}>Explore More</p>
        <Swiper
          spaceBetween={0}
          slidesPerView={perview}
          autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
        >

          <SwiperSlide>
            <SliderComponent img='/bannerfirst.webp' title='Confused Where to go?' subtitle='Get help from us' buttonText='Ask Now' color='black' />
          </SwiperSlide>

          <SwiperSlide>
          <SliderComponent img='/bannersecond.png' title='Want to Advertise?' subtitle='hotel / resort' buttonText='Contact Us' color='black' />
          </SwiperSlide>

          <SwiperSlide>
          <SliderComponent img='/bannerthird.jpg' title='Have a Hotel / Resort?' subtitle='Register for free' buttonText='Register' />
          </SwiperSlide>

        </Swiper>
      </div>
  )
}

export default BannerSlider