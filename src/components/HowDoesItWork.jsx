import React from 'react'
import DesktopMyBudget from '../assets/Images/Desktop Slider iPhone 12 Pro my budget.svg'
import DesktopYourCards from '../assets/Images/Desktop Slider iPhone 12 Pro your cards.svg'
import DesktopTransfer from '../assets/Images/Desktop Slider iPhone 12 Pro transfer.svg'
import TabletYourCards from '../assets/Images/Tablet Slider iPhone 12 Pro your cards.svg'
import TabletTransfer1 from '../assets/Images/Tablet Slider iPhone 12 Pro transfer1.svg'
import TabletTransfer2 from '../assets/Images/Tablet Slider iPhone 12 Pro transfer2.svg'
import MobileTransfer from '../assets/Images/Mobile Slider iPhone 12 Pro transfer.svg'

const HowDoesItWork = () => {
  return (
    <section id="how-does-it-work">

        <div className="container">
            <div className="top-text">
                <h1>How Does It Work?</h1>
            </div>

            <div className="images2">
                <img className="D-my-budget" src={DesktopMyBudget} />
                <img className="D-your-cards" src={DesktopYourCards} />
                <img className="D-transfer" src={DesktopTransfer} />
                <img className="T-your-cards" src={TabletYourCards} />
                <img className="T-transfer1" src={TabletTransfer1} />
                <img className="T-transfer2" src={TabletTransfer2} />
                <img className="M-transfer" src={MobileTransfer} />
            </div>

            <div className="bottom-text">
                <h2 className="desktop">Latest transaction history</h2>
                <p className="desktop">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis
                    tristique<br className="break" />quisque hac in consectetur condimentum. </p>

                <h2 className="tablet">Step 3. Transfers to people from your <br className="break" /> contact list</h2>
                <p className="tablet">Proin volutpat mollis egestas. Nam luctus facilisis ultrices.<br
                        className="break" />Pellentesque volutpat ligula est. Mattis fermentum, at nec<br
                        className="break" />lacus.</p>

                <h2 className="phone">Transfers to people from your contact list</h2>
                <p className="phone">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
                    volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
        </div>

    </section>
  )
}

export default HowDoesItWork