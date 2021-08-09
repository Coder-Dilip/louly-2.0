import styles from '../styles/Home.module.css'
import SingleBedIcon from '@material-ui/icons/SingleBed';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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
<ContactSupportIcon className={styles.services_icon} style={{background:'#ffe1cc',color:'#ff954a'}} />
<p className={styles.services_title}>Support</p>
<p className={styles.services_subTitle}>Travel guide team can help you to choose perfect place to travel and book the best hotel for you.</p>
<button className={styles.services_button1}>Get support</button>
            </div>

            <div className={styles.services_container}>
<AttachMoneyIcon className={styles.services_icon} style={{background:'#ebd1ff',color:'#b14aff'}} />
<p className={styles.services_title}>Affordable</p>
<p className={styles.services_subTitle}>Quality services with affordable price range. Our main target is your satisfaction. </p>
<button className={styles.services_button2}>Explore</button>
            </div>

        </div>
        </div>
    )
}

export default Services
