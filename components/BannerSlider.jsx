import React,{useState,useEffect,useRef} from "react"
import { useKeenSlider } from "keen-slider/react"
import styles from '../styles/Home.module.css'
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import RoomIcon from '@material-ui/icons/Room';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default (props) => {
  const [width, setwidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (process.browser) {
      setwidth(window.innerWidth);
    }
  }, []);

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView:1,
    spacing:20,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (slider) {
        slider.next()
      }
    }, 2500)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
     <div style={{position:'relative',width:'80%',margin:'auto'}}>
      <div  ref={sliderRef} className="keen-slider" id={styles.popular_img_id}>
        <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/pokhara.jpeg' width={1200} height={600} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Pokhara <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/kathmandu.jpg' width={1200} height={600} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Kathmandu <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/chitwan.jpg' width={1200} height={600} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Chitwan <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/lumbini.png' width={1200} height={600} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Lumbini <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/mustang.jpg' width={1200} height={600} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Mustang <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
        <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/Rasuwa.jpg' width={1200} height={600} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Rasuwa  <RoomIcon style={{color:'white',position:'relative',top:'5px'}}/></p>
        </div>
      </div>
      </div>
    </>
  )
}
