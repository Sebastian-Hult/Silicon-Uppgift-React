import React from 'react'
import Appstore from '../assets/Images/appstore.svg'
import Playstore from '../assets/Images/playstore.svg'
import Iphones from '../assets/Images/Telefonas uppe.svg'

const Hero = () => {
  return (
    <section id="hero-sect">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your <br className="break" /> Money in One App</h1>
            </div>
            <div className="content">
                <p>We offer you a new generation of the mobile banking. <br className="break" /> Save, spend & manage
                    money in your pocket.</p>
                <div className="store-buttons">
                    <a className="store" href="#"><img src={Appstore} /></a>
                    <a className="store" href="#"><img src={Playstore} /></a>
                </div>

                <a href="#" className="discover-more">
                    <span className="round-btn">
                        <i className="fa-regular fa-chevron-down"></i>
                    </span>
                    <span>Discover More</span>
                </a>
            </div>

            <div className="images">
                <img className="img-whole" src={Iphones} />
            </div>

        </div>
    </section>
  )
}

export default Hero