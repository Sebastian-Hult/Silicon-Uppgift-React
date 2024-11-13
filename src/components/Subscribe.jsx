import SubBell from '../assets/Images/notification.svg'
import SubscribeForm from './SubscribeForm'

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
            <SubscribeForm />
        </div>
    </section>
  )
}

export default Subscribe