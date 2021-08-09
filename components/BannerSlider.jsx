import React,{useCallback,useState,useEffect,useRef} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { useResizeDetector } from 'react-resize-detector';


export default (props) => {
  const [pause, setPause] = useState(false)
  const timer = useRef()
  let sliderRes;
  const [sliderRef,slider] = useKeenSlider({
    slidesPerView:1,
    loop:true,
duration:1000,
spacing:1,
 dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    created(s) {
      sliderRes=s;
    },
  })

useEffect(() => {
    timer.current = setInterval(() => {
      if (slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [slider])

  const onResize = useCallback(() => {
    if (sliderRes !== undefined && sliderRes !== null) {
      sliderRes.resize();
    }
  }, []);

 useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  const { width, height, ref } = useResizeDetector({ onResize, handleWidth: true, handleHeight: false });


  return (
    <div ref={ref} style={{width:'80%', marginTop:'120px'}}>
    <div ref={sliderRef} className="keen-slider">
     <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/pokhara.jpeg' width={1200} height={400} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Pokhara</p>
        </div>
     <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/pokhara.jpeg' width={1200} height={400} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Pokhara</p>
        </div>
     <div className="keen-slider__slide">
            <Image className={styles.slider_img} priority={true} src='/pokhara.jpeg' width={1200} height={400} />
            <p style={{zIndex:'200',position:'relative',top:'-60px',left:'20px',color:'white',fontWeight:'bold'}}>Pokhara</p>
        </div>
    </div>
    </div>
  )
}
