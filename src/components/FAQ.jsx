import React from 'react'

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
            <div className="accordions"> {/* Accordions är tagna från W3 schools HOW TO Creat An Accordion */}
                <div className="accordion1 border">
                    <button className="accordion">Is any of my personal information stored in the App?</button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis
                            arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie
                            lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
                            montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut
                            consequat.</p>
                    </div>
                </div>
                <div className="accordion2 border">
                    <button className="accordion">What formats can I download my transaction history in?</button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis
                            arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie
                            lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
                            montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut
                            consequat.</p>
                    </div>
                </div>
                <div className="accordion3 border">
                    <button className="accordion">Can I schedule future transfers?</button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis
                            arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie
                            lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
                            montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut
                            consequat.</p>
                    </div>
                </div>
                <div className="accordion4 border">
                    <button className="accordion">When can I use Banking App services?</button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis
                            arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie
                            lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
                            montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut
                            consequat.</p>
                    </div>
                </div>
                <div className="accordion5 border">
                    <button className="accordion">Can I create my own password that is easy for me to
                        remember?</button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis
                            arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie
                            lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
                            montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut
                            consequat.</p>
                    </div>
                </div>
                <div className="accordion6 border">
                    <button className="accordion">What happens if I forget or lose my password?</button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
                            viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis
                            arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie
                            lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod
                            montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut
                            consequat.</p>
                    </div>
                </div>
            </div>
            <div className="contact-btn">
                <button className="btn-contact">Contact us now</button>
            </div>
        </div>
    </section>
  )
}

export default FAQ