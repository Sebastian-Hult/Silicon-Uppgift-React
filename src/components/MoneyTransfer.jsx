import React from 'react'
import CheckCircle from '../assets/Images/bx-check-circle.svg'
import MoneyTransferCard from '../assets/Images/money-transfer-card.svg'
import MoneyTransferRight from '../assets/Images/money-transfer.svg'
import PaymentInfoCard from '../assets/Images/credit-card.svg'
import PaymentInfoWallet from '../assets/Images/wallet.svg'

const MoneyTransfer = () => {
  return (
    <section id="money-transfer">
        <div className="container">
            <div className="left-transfer">
                <div className="money-transfer">
                    <h2>Make your money <br className="break" /> transfer simple and clear</h2>
                    <div className="money-check">
                        <p>
                            <img src={CheckCircle} /> Banking transactions are free for you
                        </p>
                        <p>
                            <img src={CheckCircle} /> No monthly cash commission
                        </p>
                        <p>
                            <img src={CheckCircle} /> Manage payments and transactions
                            online
                        </p>
                    </div>
                    <button className="btn-learnmore">Learn more <i
                            className="fa-sharp fa-solid fa-arrow-right arrow"></i></button>
                </div>
                <div className="img-transfer1">
                    <img src={MoneyTransferCard} />
                </div>
            </div>
            <div className="right-transfer">
                <div className="img-transfer2">
                    <img src={MoneyTransferRight} />
                </div>
                <div className="payments">
                    <h2>Receive payment from <br className="break" /> international bank details</h2>
                    <div className="payment-info">
                        <div className="payment-info-card">
                            <img className="symbols" src={PaymentInfoCard} />
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                        <div className="payment-info-card">
                            <img className="symbols" src={PaymentInfoWallet} />
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                    <button className="btn-learnmore">Learn more <i
                            className="fa-sharp fa-solid fa-arrow-right arrow"></i></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MoneyTransfer