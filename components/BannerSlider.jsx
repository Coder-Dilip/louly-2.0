
import { useState } from "react";
import Image from "next/image";

// export default function BannerSlider(){
//     return (
//         <div style={{position:'relative', width:'80%', height:'400px'}}>
// <Image src='/pokhara.jpeg' layout='fill' />
//         </div>
//     )
// }


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import { useEffect } from "react";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const BannerSlider = () => {
    const [perview, setperview] = useState(0)
    useEffect(()=>{
       setperview(1) 
    },[])
  return (
      <div className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={perview}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div>  <div style={{position:'relative', width:'80%', height:'400px'}}>
 <Image src='/pokhara.jpeg' layout='fill' />
         </div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div>  <div style={{position:'relative', width:'80%', height:'400px'}}>
 <Image src='/pokhara.jpeg' layout='fill' />
         </div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div>Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div >Slide 4</div>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default BannerSlider