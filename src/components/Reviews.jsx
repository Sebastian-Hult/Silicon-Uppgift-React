import React from 'react'
import Quotations from '../assets/Images/quotations.svg'
import FourStarRating from '../assets/Images/4-star-rating.svg'
import Fannie from '../assets/Images/Fannie.svg'
import FiveStarRating from '../assets/Images/5-star-rating.svg'
import Albert from '../assets/Images/Albert.svg'

const Reviews = () => {
  return (
    <section id="reviews">
        <div className="container">
            <div className="headline">
                <h2>Clients are Loving Our App</h2>
            </div>
            <div className="cards">
                <div className="card">
                    <img className="quotations" src={Quotations} />
                    <img src={FourStarRating} />
                    <p className="review">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
                        Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac
                        hendrerit. Montes justo turpis sit amet.</p>
                    <div className="person">
                        <div className="person-img">
                            <img src={Fannie} />
                        </div>
                        <div className="person-info">
                            <h3>Fannie Summers</h3>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="quotations" src={Quotations} />
                    <img src={FiveStarRating} />
                    <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet
                        porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum
                        pretium dolor tincidunt egestas eget nunc.</p>
                    <div className="person">
                        <div className="person-img">
                            <img src={Albert} />
                        </div>
                        <div className="person-info">
                            <h3>Albert Flores</h3>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews