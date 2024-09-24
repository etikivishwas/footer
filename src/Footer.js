import React from 'react'
import styles from './styles.module.css'

function Footer() {
  return (
    <div className={styles.Main}>
        <div className={styles.picture}>
            <img src='./logo.png' alt='logo1'/>
        </div>
        <div className={styles.address}>
            <p className={styles.para1}><b>Address:</b><br/>
            Madhapur,<br/>
            Hyderabad,<br/>
            500081,<br/>
            Telangana, <br/>
            India.<br/>
            </p>
            <p className={styles.para2}>
                <b>Phone Number:</b><br/>
                +91 91777 05479
            </p>
            <p className={styles.para3}>
                <b>Visit Office:</b>
            </p>

        </div>
        <div className={styles.services}>
            <p className={styles.p1}>
                <b>Services:</b><br/>
                Product Branding and Designing <br/>
                Product Packaging <br/>
                Technology and Developmen <br/>
                Advertisement and Marketing
            </p>
            <br/>
            <p className={styles.p2}>
                <b>Bussiness Enquiry:</b><br/>
                John Doe
            </p>
            <p className={styles.p3}>
                <b>Requirement Enquiry:</b><br/>
                John Doe
            </p>

        </div>
        <div className={styles.touch}>
            <p className={styles.pa1}>
                <b>Get In Touch:</b><br/>

            </p>
            <p className={styles.pa2}>
                <b>Subscribe For Updates:</b>
            </p>

        </div>
        

    </div>
  )
}

export default Footer