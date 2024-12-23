import React, { useState } from 'react'

{/* 
    The validation of the form is made with a little help from both Hans and ChatGPT. 
    (General structure of the code with help from Hans)
    (The "else if" in both handleChange and handleSubmit, ChatGPT helped me with) 
*/}

const SubscribeForm = () => {

    const [formData, setFormData] = useState({ email: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handelChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: 'This field is required. Eg: username@domain.com'}))
        } else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            setErrors(prevErrors => ({...prevErrors, [name]: 'Please enter a valid email adress. Eg: username@domain.com'}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleBack = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}

        if (formData.email.trim() === '') {
            newErrors.email = 'This field is required. Eg: username@domain.com'
        } else if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address. Eg: username@domain.com'
        }

        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `This field is required. Eg: username@domain.com`  
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
            <div className="container">
                <div className="sub-info">
                    <p className="D-sub-text">Thank you for subscribing to out newsletter!<br className='break' />We hope you'll enjoy the updates to come!</p>
                    <p className="M-sub-text">Thank you for subscribing to out newsletter!<br className='break' />We hope you'll enjoy the updates to come!</p>
                </div>
                <button className='btn-back' onClick={handleBack}>Back to main site</button>
            </div>
        )
    }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <div className="search">
            <i className="fa-light fa-envelope icon"></i>
            <input className="input-email" name="email" type="email" value={formData.email} onChange={handelChange} required placeholder="Your Email" />
            <button type="submit" className="label-email">Subscribe</button>
        </div>
        <span>{errors.email && errors.email}</span>
    </form>
  )
}

export default SubscribeForm