import React from 'react'
import LogoType from '../assets/Images/Silicon Logo.svg'
import HamburgerMenu from '../assets/Images/hamburgermeny.svg'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <header>

        <div className="container">

            <a id="big-logo" href="Inuppg.html"><img src={LogoType} /></a>

            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <DarkModeSwitch />

            <button href="#" id="loggain" className="btn-primary">
                <i className="fa-light fa-user signin-logo"></i>Sign in / up
            </button>

            <button className="hamburger-mobile">
                <img className="hamburger-logo" src={HamburgerMenu} />
            </button>

        </div>

    </header>
  )
}

export default Header