import React,{useState,useEffect} from 'react';

import styles from '../styles/Home.module.css';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

function Whyus() {
    const [width, setwidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
      if (process.browser) {
        setwidth(window.innerWidth);
      }
    }, []);
    return (
        <div style={{marginLeft: width > 542 ? '10%' : '6%',maxWidth:'80%',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-evenly',marginBottom:'50px'}}>
            <div className={styles.left_whyus} style={{display:'flex',alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
                    <div style={{background:'#ccc9ff',height:'200px',display:'grid',placeItems:'center',padding:'20px',borderRadius:'15px',margin:'20px'}}>
                    <p style={{fontFamily:'sans-serif', fontWeight:'bold',color:'#837dff',fontSize:'1.8rem',textAlign:'center',width:'100%'}}>500+</p>
                        <p style={{textAlign:'center',color:'#837dff',marginTop:'-70px',fontWeight:'bold'}}>Destinations</p>
                    </div>
                <div>
                    <div style={{background:'#dbffc7'}}>
                        <p style={{fontFamily:'sans-serif', fontWeight:'bold',color:'#64b538',fontSize:'1.8rem',textAlign:'center',width:'100%'}}>200+</p>
                        <p style={{textAlign:'center',color:'#64b538',marginTop:'-20px',fontWeight:'bold'}}>Trips</p>
                    </div>
                   
                    <div style={{background:'#ffdec7'}}>
                        <p style={{fontFamily:'sans-serif', fontWeight:'bold',color:'#ff9447',fontSize:'1.8rem',textAlign:'center',width:'100%'}}>10K+</p>
                        <p style={{textAlign:'center',color:'#ff9447',marginTop:'-20px',fontWeight:'bold'}}>Community</p>
                    </div>

                </div>
            </div>

            <div className={styles.right_whyus}  style={{maxWidth:'40%',minWidth:'230px',marginLeft:'30px'}}>
                <h1>Why Us <ContactSupportIcon className={styles.left_whyus} style={{color:'#ffa600',width:'50px',height:'50px'}} /></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem, iure, ea odit, molestias at possimus vitae ducimus ipsam doloremque deserunt consequatur numquam?</p>
                <button className={styles.contacts}>Learn more</button>
            </div>
        </div>
    )
}

export default Whyus
