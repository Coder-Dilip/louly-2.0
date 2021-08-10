
import { useState } from "react";
import Image from "next/image";

// export default function BannerSlider(){
//     return (
//         <div style={{position:'relative', width:'80%', height:'400px'}}>
// <Image src='/pokhara.jpeg' layout='fill' />
//         </div>
//     )
// }


// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import { useEffect } from "react";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay])

const BannerSlider = () => {
    const [perview, setperview] = useState(0)
    useEffect(()=>{
       setperview(1) 
    },[])
  return (
      <div style={{border:'2px solid black', width:'80%', margin:'auto'}}>
        <Swiper
          spaceBetween={0}
          slidesPerView={perview}
          autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
          }}
        >
          <SwiperSlide>
            <div > 
                <div style={{position:'relative', width:'100%', height:'400px',margin:'auto'}}>
 <Image src='/pokhara.jpeg' layout='fill' />
         </div>
         </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>  
                <div style={{position:'relative', width:'100%', height:'400px',margin:'auto'}}>
 <Image src='/pokhara.jpeg' layout='fill' />
         </div>
         </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div>  
                <div style={{position:'relative', width:'100%', height:'400px',margin:'auto'}}>
 <Image src='/pokhara.jpeg' layout='fill' />
         </div>
         </div>
          </SwiperSlide>
    

        </Swiper>
      </div>
  )
}

export default BannerSlider