import React, { useState, useEffect } from 'react'
import Quotations from '../assets/Images/quotations.svg'
import StarRating from './StarRating'

const ReviewComponents = () => {

    const [reviewItems, setReviewItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setReviewItems(data)
    }

    useEffect(() => {
        fetchData()
    }, []) 

  return (
    <div className="cards">
        {reviewItems.map((item) => (

            <div key={item.id} className="card">
                <img className="quotations" src={Quotations} />
                <StarRating starRating={item.starRating} />
                <p className="review">{item.comment}</p>
                <div className="person">
                    <div className="person-img">
                        <img src={item.avatarUrl} />
                    </div>
                    <div className="person-info">
                        <h3>{item.author}</h3>
                        <p>{item.jobRole}</p>
                    </div>
                </div>
            </div>

        ))}
    </div>
  )
}

export default ReviewComponents