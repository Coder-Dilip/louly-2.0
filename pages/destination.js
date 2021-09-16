import Destination from "../components/Destination"
import Header from "../components/Header"
import Footer from '../components/Footer'

function destination() {
    return (
        <div>
            <Header />
            <div style={{margin:'auto',maxWidth:'1500px'}}>
            <Destination /> 
    </div>
    <Footer />
          
        </div>
    )
}

export default destination
