import React from 'react'
import Logo1 from '../assets/Images/Logo-1.svg'
import Logo2 from '../assets/Images/Logo-2.svg'
import Logo3 from '../assets/Images/Logo-3.svg'
import Logo4 from '../assets/Images/Logo-4.svg'
import Logo5 from '../assets/Images/Logo-5.svg'
import Logo6 from '../assets/Images/Logo-6.svg'

const Logos = () => {
  return (
    <section id="logos">
        <div className="container">
            <div id="logo-1" className="logo-box">
                <img src={Logo1} />
            </div>
            <div id="logo-2" className="logo-box">
                <img src={Logo2} />
            </div>
            <div id="logo-3" className="logo-box">
                <img src={Logo3} />
            </div>
            <div id="logo-4" className="logo-box">
                <img src={Logo4} />
            </div>
            <div id="logo-5" className="logo-box">
                <img src={Logo5} />
            </div>
            <div id="logo-6" className="logo-box">
                <img src={Logo6} />
            </div>
        </div>
    </section>
  )
}

export default Logos