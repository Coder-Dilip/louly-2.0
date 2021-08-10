
import { useState, useEffect } from "react";
import Image from "next/image";
import SwiperCore, {
    Autoplay,Pagination,Navigation, EffectFade
  } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade])
import styles from '../styles/Home.module.css'

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
            <div > 
                <div style={{position:'relative', width:'100%', height:'300px',margin:'auto'}}>
 <Image src='/sample.jpg' objectFit='contain' layout='fill' />
         </div>
         </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>  
                <div style={{position:'relative', width:'100%', height:'300px',margin:'auto'}}>
 <Image src='/sample.jpg' objectFit='contain' layout='fill' />
         </div>
         </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>  
                <div style={{position:'relative', width:'100%', height:'300px',margin:'auto'}}>
 <Image src='/sample.jpg' objectFit='contain' layout='fill' />
         </div>
         </div>
          </SwiperSlide>

        </Swiper>
      </div>
  )
}

export default BannerSlider