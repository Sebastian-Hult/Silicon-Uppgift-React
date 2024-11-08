import FAQaccordions from './FAQaccordions'

const FAQ = () => {
  return (
    <section id="FAQ">
        <div className="container">
            <div className="text-info">
                <h2>Any questions? <br className="break" /> Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get <br className="break" /> in touch?</p>
            </div>
            <div className="contacts">
                <div className="contact-phone contact-box">
                    <div className="contact-img">
                        <i className="fa-sharp fa-solid fa-phone-volume icons"></i>
                    </div>
                    <p>Still have questions?</p>
                    <a href="#">Contact us <i className="fa-sharp fa-solid fa-arrow-right arrow"></i></a>
                </div>
                <div className="contact-chat contact-box">
                    <div className="contact-img">
                        <i className="fa-sharp fa-solid fa-comment-dots icons"></i>
                    </div>
                    <p>Don't like phone calls?</p>
                    <a href="#">Contact us <i className="fa-sharp fa-solid fa-arrow-right arrow"></i></a>
                </div>
            </div>

            <FAQaccordions />

            <div className="contact-btn">
                <button className="btn-contact">Contact us now</button>
            </div>
        </div>
    </section>
  )
}

export default FAQ