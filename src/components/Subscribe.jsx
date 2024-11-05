import React from 'react'
import SubBell from '../assets/Images/notification.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
        <div className="container">
            <div className="sub-info">
                <img className="sub-bell" src={SubBell} />
                <p className="D-sub-text">Subscribe to our newsletter to stay <br className="break" /> informed about
                    latest updates</p>
                <p className="M-sub-text">Subscribe to our newsletter</p>
            </div>
            <div className="search">
                <i className="fa-light fa-envelope icon"></i>
                <input className="input-email" name="email" type="email" placeholder="Your Email" />
                <label className="label-email">Subscribe</label>
            </div>
        </div>
    </section>
  )
}

export default Subscribe