import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import {Close, Menu,Instagram,Facebook,YouTube } from '@material-ui/icons';
import PublicIcon from '@material-ui/icons/Public';

import router, { useRouter } from 'next/router'

export default function Header() {
    const [width, setwidth] = useState(0)
    const [color, setcolor] = useState('');
    const [clicked, setclicked] = useState(false);
    const [top, settop] = useState(-100);
    const [opacity, setopacity] = useState(1)
    const [pathname, setpathname] = useState('')
    useEffect(()=>{
        setwidth(window.innerWidth)
        let pathnames=window.location.href
        let splitted=pathnames.split('/')
     setpathname(splitted[splitted.length-1])
    },[])

    setInterval(() => {
        if (process.browser) {
            setwidth(window.innerWidth)
            
        }
    }, 200);

    function handleClick(){
        let pathnames=window.location.href
        let splitted=pathnames.split('/')
     setpathname(splitted[splitted.length-1])
        if(color==''){
setcolor('blue')
        }else{
            setcolor('')
        }
        if(clicked==false){
settop(50)
// setopacity(0)
        }

       
            setclicked(!clicked)
       
    }
  return (
      <>
   <nav className={styles.nav} style={{width:'100%',margin:'auto',display:'flex',alignItems:'center',justifyContent:'center',boxShadow: '1px 10px 17px -10px rgba(0,0,0,0.08)',
   padding:'0 20px',position:'fixed',top:0,zIndex:1000}}>
       <div style={{display:'flex',width:'100%',margin:'auto',display:'flex',alignItems:'center',justifyContent:'space-between',
   padding:'0 20px',position:'fixed',top:-6,zIndex:1000,maxWidth:'1100px'}}>
      <Link href='/'><div style={{display:'flex',alignItems:'center',cursor:'pointer'}} onClick={()=>window.location.href='/'}>
          <h3>Lo</h3>
          <h3 style={{color:'#3340ff'}}>uly</h3>
      </div></Link> 

      {width>550?<div style={{width:'60%',display:'flex',alignItems:'center',justifyContent:'space-evenly',maxWidth:'500px',fontWeight:'bold'}}>
            <Link href='/#work'><p className={pathname=='#work'? styles.active: styles.nav_links} style={{cursor:'pointer'}}>Work</p></Link>
            <Link href='/about'><p  className={router.pathname=='/about'? styles.active: styles.nav_links}>About</p></Link>
           <Link href='/products'><p  className={router.pathname=='/products'? styles.active: styles.nav_links}>Products</p></Link>
            <Link href='/blog'><p  className={router.pathname=='/blog'? styles.active: styles.nav_links}>Blog</p></Link>
      </div>:null}

      {width<550 && clicked?<div style={{width:'105vw',display:'flex',alignItems:'center',justifyContent:'flex-start',fontWeight:'bold',flexDirection:'column',transition:'.3s',position:'absolute',top:top,alignItems:'flex-start', borderRadius:'10px',padding:'30px 20px',background:"rgba(255, 255, 255, 0.989)",height:'100vh',left:'-2px',opacity:opacity}} className={styles.responsive_container}>
            <Link  href='/#work' ><p  onClick={handleClick} className={pathname=='#work'? styles.active: styles.nav_links} style={{fontSize:'1.5rem',marginBottom:'5px',cursor:'pointer'}}>Work</p></Link>
            <Link href='/about'><p  onClick={handleClick}  className={router.pathname=='/about'? styles.active: styles.nav_links} style={{fontSize:'1.5rem',marginBottom:'5px'}}>About</p></Link>
           <Link href='/products'><p  onClick={handleClick}  className={router.pathname=='/products'? styles.active: styles.nav_links} style={{fontSize:'1.5rem',marginBottom:'5px'}}>Products</p></Link>
            <Link href='/blog'><p  onClick={handleClick}  className={router.pathname=='/blog'? styles.active: styles.nav_links} style={{fontSize:'1.5rem',marginBottom:'5px'}}>Blog</p></Link>
            <Link href='/contact'><p  onClick={handleClick}  className={router.pathname=='/contact'? styles.active: styles.nav_links} style={{fontSize:'1.5rem',marginBottom:'5px'}}>Contact</p></Link>
            <div style={{width:'100%',marginTop:width<'350'?'50px':'130px',marginLeft:'-5px'}}>
            <button onClick={() =>window.open('mailto:designsdilip@gmail.com')} className={styles.contacts} style={{width:'100%',fontWeight:300,letterSpacing:'.09rem',padding:'10px 20px'}}>info@nomadictravelers.com</button>
<div style={{display:'flex',alignItems:'center',width:'200px',justifyContent:'space-between',margin:'auto', marginTop:'30px'}}>
<a href='https://www.instagram.com/nepalnomadictravelers' target="_blank" rel="noreferrer"><Instagram className={styles.links_icons_footer} /></a>
    <a href='https://www.facebook.com/nepalnomadictraveler' target="_blank" rel="noreferrer"><Facebook className={styles.links_icons_footer} /></a>
    <a href='https://github.com/Coder-Dilip' target="_blank" rel="noreferrer"><PublicIcon className={styles.links_icons_footer} /></a>
    <a href='https://www.youtube.com/travel' target="_blank" rel="noreferrer"><YouTube className={styles.links_icons_footer} /></a>
</div>
<Close onClick={handleClick} style={{position:'relative',left:'90%', background:'orangered',borderRadius:'50%',boxShadow: '1px 10px 17px -10px rgba(0,0,0,0.08)',padding:'10px',color:'white',fontSize:'2.1rem'}} />
            </div>
      </div>:null}

      {width>550?<button onClick={()=>window.location.href='/contact'} className={styles.contacts}>Contact</button>:null}

      {width<550?<div onClick={handleClick}><Menu style={{color:color,cursor:'pointer'}} /></div>:null}
      </div>
   </nav>
   <div style={{marginBottom:'40px'}}></div>
   </>
  )
}