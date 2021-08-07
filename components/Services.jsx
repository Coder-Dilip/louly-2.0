import styles from '../styles/Home.module.css'
import SingleBedIcon from '@material-ui/icons/SingleBed';
function Services() {
    return (
        <div style={{margin:'auto',width:'100%'}}>
           <p className={styles.subTitle}>Our Services</p>
        <div className={styles.blurServices} style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

            <div className={styles.services_container}>
<SingleBedIcon className={styles.services_icon} style={{background:'#d9f3ff',color:'#008bfc'}} />
<p className={styles.services_title}>Reservation</p>
<p className={styles.services_subTitle}>Hotel reservation is now easy. You can choose according to your budget.</p>
<button className={styles.services_button}>Book now</button>
            </div>

            <div className={styles.services_container}>
<SingleBedIcon className={styles.services_icon} style={{background:'#d9f3ff',color:'#008bfc'}} />
<p className={styles.services_title}>Reservation</p>
<p className={styles.services_subTitle}>Hotel reservation is now easy. You can choose according to your budget.</p>
<button className={styles.services_button}>Book now</button>
            </div>

            <div className={styles.services_container}>
<SingleBedIcon className={styles.services_icon} style={{background:'#d9f3ff',color:'#008bfc'}} />
<p className={styles.services_title}>Reservation</p>
<p className={styles.services_subTitle}>Hotel reservation is now easy. You can choose according to your budget.</p>
<button className={styles.services_button}>Book now</button>
            </div>

         
            

        </div>
        </div>
    )
}

export default Services
