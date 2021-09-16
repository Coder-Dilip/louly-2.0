import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RoomIcon from '@material-ui/icons/Room';
import Image from 'next/image'
import styles from '../styles/Destination.module.css'
import { useRouter } from "next/dist/client/router";

import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Slider=()=>{
    const router=useRouter();
    const [width, setwidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
      if (process.browser) {
        setwidth(window.innerWidth);
      }
    }, []);
  
    const [sliderRef, slider] = useKeenSlider({
      slidesPerView: width>1024?3.2:width>500?2.2:1.2,
      spacing: 10,
      initial: 0,
      // loop:true
    });
    return (
      <>
 
        <div style={{width:'80%',  maxWidth:'1000px', margin:'auto', marginTop:'100px'}}>
        <div ref={sliderRef} className="keen-slider" id={styles.popular_img_id}>
          <div onClick={()=>router.push('/destination/?location=pokhara')} className="keen-slider__slide" style={{position:'relative'}}>
              <Image className={styles.slider1_img} priority={true} objectFit='cover' src='/mountainsketch.png' width={380} height={450} />
              <div style={{position:'absolute', top:'20%', left:'10%'}}>
              <p>Top Places of</p>
              <h2 style={{marginTop:'-5px'}}>{router.query.location}</h2>
              <div style={{display:'flex',alignItems:'center', border:'2px solid #ffdfa3', padding:'5px 10px', width:'90px',  height:'30px',borderRadius:'15px',background:'#ffdfa3'}}><p style={{fontSize:'0.9rem',fontWeight:'bold'}}>Scroll</p>  <ArrowForwardIosIcon style={{height:'13px',width:'13px', opacity:'0.5',marginLeft:'5px'}}/></div>
              </div>
          </div>
          <div onClick={()=>router.push('/destination/?location=kathmandu')} className="keen-slider__slide">
              <Image className={styles.slider_img} priority={true} src='/kathmandu.jpg' width={260} height={300} />
              <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Kathmandu <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
          </div>
          <div onClick={()=>router.push('/destination/?location=chitwan')} className="keen-slider__slide">
              <Image className={styles.slider_img} priority={true} src='/chitwan.jpg' width={260} height={300} />
              <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Chitwan <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
          </div>
          <div onClick={()=>router.push('/destination/?location=lumbini')} className="keen-slider__slide">
              <Image className={styles.slider_img} priority={true} src='/lumbini.png' width={260} height={300} />
              <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Lumbini <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
          </div>
          <div onClick={()=>router.push('/destination/?location=mustang')} className="keen-slider__slide">
              <Image className={styles.slider_img} priority={true} src='/mustang.jpg' width={260} height={300} />
              <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Mustang <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
          </div>
          <div onClick={()=>router.push('/destination/?location=rasuwa')} className="keen-slider__slide">
              <Image className={styles.slider_img} priority={true} src='/Rasuwa.jpg' width={260} height={300} />
              <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Rasuwa  <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
          </div>
        </div>
        </div>
       
        </>
    )
}

function Destination() {
    const router =useRouter();
    let destination=router.query;
const [location, setlocation] = useState('')


    useEffect(()=>{
if(process.browser){
    setlocation(destination.location)
}
    },[destination.location])
    return (
        <>
        <div style={{position:'relative', width:'100%', height:'70vh', maxHeight:'800px',zIndex:'-1'}}>
           <Image src='/pkr.jpg' layout='fill' objectFit='cover' />
        </div>
           <div className={styles.destinationInfo} style={{margin:'auto', width:'80%', display:'flex', flexWrap:'wrap', alignItems:'center', padding:'0 30px', justifyContent:'space-between', maxWidth:'800px', marginTop:'-40px',zIndex:'10', background:'white', borderRadius:'5px'}}>
               <div>
                   <div style={{display:'flex', alignItems:'center'}}>
                   <p style={{opacity:'0.6'}}>Location</p>
                   <LocationOnIcon style={{color:'gray', opacity:'0.5', height:'15px', width:'15px'}}/>
                   </div>
                   <h2 style={{fontFamily:'sans-serif', marginTop:'-12px'}}>{location}</h2>
               </div>
<div>
<p style={{marginBottom:'-7px'}}>Rating</p>
<div style={{display:'flex',alignItems:'center'}}>
    <p style={{opacity:'0.6', position:'relative', top:'1px',marginRight:'4px'}}>5</p>
<Rating name="size-medium" max={1} defaultValue={1} precision={1} size="small" readOnly />
</div>



</div>

           </div>
<Slider />
           </>
    )
}

export default Destination
