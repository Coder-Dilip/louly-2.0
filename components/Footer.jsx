import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'
import {Avatar} from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { GitHub,Instagram,Facebook,YouTube } from '@material-ui/icons';
import PublicIcon from '@material-ui/icons/Public';
import CopyrightIcon from '@material-ui/icons/Copyright';


function Footer() {
    const [width, setwidth] = useState("");
const [copied, setcopied] = useState('')

  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);
    return (
        <div style={{marginTop:'50px',width:'100vw',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#000917',color:'white',paddingTop:'50px', paddingBottom:'50px'}}>
          <p style={{opacity:'0.6'}}>Get in touch</p>
          <p style={{
              fontSize:
                width > 768
                  ? "41px"
                  : width > 660
                  ? "43px"
                  : width > 400
                  ? "30px"
                  : width > 300
                  ? "22px"
                  : "20px",
              marginTop: "-10px",
              width: "100%",
              animation:'none',
              textAlign:'center',
              marginTop:'-2px',
              fontFamily:'sans-serif',
              fontWeight:'bolder'

            }}>Let&apos;s Travel Nepal</p>
            <p style={{textAlign:'center',width:'93%',maxWidth:'500px',fontSize:'1.1rem',letterSpacing:'0.05rem',lineHeight:'1.8rem',marginTop:'-20px'}}>If you want to get help regarding chosing destination, Budget Estimation, Booking, Transportation feel free to <span onClick={()=>window.location.href='/contact'} className={styles.nomadicTravelers} style={{color:'#00d0fa',borderBottomColor:'#00d0fa',paddingBottom:'2px',cursor:'pointer',fontWeight:'bold'}}>contact</span> us.</p>


<div style={{width:'100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
<input className={styles.contacts} style={{marginTop:'15px',outline:'none',textAlign:'center',fontWeight:'normal'}} value='info@nomadictravelers.com' contentEditable={false} readOnly={true} />
</div>

<div style={{display:'flex',alignItems:'center',width:'200px',justifyContent:'space-between',margin:'auto',marginTop:'30px',marginBottom:'20px'}}>
    <a href='https://www.instagram.com/nepalnomadictravelers' target="_blank" rel="noreferrer"><Instagram className={styles.links_icons_footer} /></a>
    <a href='https://www.facebook.com/nepalnomadictraveler' target="_blank" rel="noreferrer"><Facebook className={styles.links_icons_footer} /></a>
    <a href='https://github.com/Coder-Dilip' target="_blank" rel="noreferrer"><PublicIcon className={styles.links_icons_footer} /></a>
    <a href='https://www.youtube.com/travel' target="_blank" rel="noreferrer"><YouTube className={styles.links_icons_footer} /></a>
</div>

<div style={{display:'flex',alignItems:'center',fontSize:'0.5rem',opacity:'0.8',marginTop:'30px'}}>
    <CopyrightIcon style={{fontSize:'15px',marginRight:'2px',position:'relative', top:'-2px'}}/>
    <p>{new Date().getFullYear()}</p>
    <p style={{marginLeft:'5px',cursor:'default'}}>All rights reserved - NepalNomadicTravelers</p>
</div>

        </div>
    )
}

export default Footer
