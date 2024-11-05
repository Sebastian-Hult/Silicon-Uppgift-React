import React from 'react'
import IphoneCard from '../assets/Images/iPhone card image.svg'
import CreditCard from '../assets/Images/credit-card.svg'
import Shield from '../assets/Images/shield.svg'
import BarsGrafic from '../assets/Images/bars-graphic.svg'
import Communication from '../assets/Images/communication.svg'
import Wallet from '../assets/Images/wallet.svg'
import Happy from '../assets/Images/happy.svg'

const Features = () => {
  return (
    <section id="features">
        <div className="container">
            <div className="img-card-phone">
                <img src={IphoneCard} />
            </div>
            <div className="headline">
                <h1>App Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam
                    luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
                </p>
            </div>
            <div className="content">
                <div id="info" className="1">
                    <img id="symbols" className="symbol1" src={CreditCard} />
                    <div className="text">
                        <h2>Easy Payment</h2>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div id="info" className="2">
                    <img id="symbols" className="symbol2" src={Shield} />
                    <div className="text">
                        <h2>Data Security</h2>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
                </div>

                <div id="info" className="3">
                    <img id="symbols" className="symbol3" src={BarsGrafic} />
                    <div className="text">
                        <h2>Cost Statistics</h2>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>

                <div id="info" className="4">
                    <img id="symbols" className="symbol4" src={Communication} />
                    <div className="text">
                        <h2>Support 24/7</h2>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>

                <div id="info" className="5">
                    <img id="symbols" className="symbol5" src={Wallet} />
                    <div className="text">
                        <h2>Regular Cashback</h2>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                </div>

                <div id="info" className="6">
                    <img id="symbols" className="symbol6" src={Happy} />
                    <div className="text">
                        <h2>Top Standards</h2>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor
                            arcu.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features