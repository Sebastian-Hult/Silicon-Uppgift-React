import React, { useState } from 'react'
import SubBell from '../assets/Images/notification.svg'

const SubscribeForm = () => {

    const [formData, setFormData] = useState({ email: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handelChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: 'This field is required. Eg: example@domain.com'}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `This field is required. Eg: example@domain.com`  
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })



        if (res.ok) {
            setSubmitted(true)
            setFormData({ email: '' })
        }
    }

    if (submitted) {
        return (
            <section id="subscribe">
                <div className="container">
                    <div className="sub-info">
                        <img className="sub-bell" src={SubBell} />
                        <p className="D-sub-text">Thank you for subscribing to out newsletter!<br className='break' />We hope you'll enjoy the updates to come!</p>
                        <p className="M-sub-text">Thank you for subscribing to out newsletter!<br className='break' />We hope you'll enjoy the updates to come!</p>
                    </div>
                    <button className='btn-back' onClick={handleOk}>Back to main site</button>
                </div>
            </section>
        )
    }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <div className="search">
            <i className="fa-light fa-envelope icon"></i>
            <input className="input-email" name="email" type="email" value={formData.email} onChange={handelChange} required placeholder="Your Email" />
            <label type="submit" className="label-email">Subscribe</label>
        </div>
        <span>{errors.email && errors.email}</span>
    </form>
  )
}

export default SubscribeForm