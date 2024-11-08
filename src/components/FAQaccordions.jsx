import React, { useState } from 'react'

const FAQaccordions = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (index) => {
        setIsOpen(prevIndex => prevIndex === index ? false : index)
    }
    

    const questions = [
        { question: 'Is any of my personal information stored in the App?', answer: 'Lorem' },
        { question: 'What formats can I download my transaction history in?', answer: 'Lorem' },
        { question: 'Can I schedule future transfers?', answer: 'Lorem' },
        { question: 'When can I use Banking App services?', answer: 'Lorem' },
        { question: 'Can I create my own password that is easy for me to remember?', answer: 'Lorem' },
        { question: 'What happens if I forget or lose my password?', answer: 'Lorem' },
    ]

  return (
    <div className="accordions">
    {questions.map((item, index) => (

        <div key={index} className="accordion1 border">
            <button className="accordion" onClick={() => toggleOpen(index)}>
                {item.question}
                <i className={`fa-regular fa-chevron-down accordion-arrow ${isOpen === index ? 'active' : ''}`}></i>
            </button>
            <div className={`panel ${isOpen === index ? 'open' : ''}`} >
                <div className="expandable">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>

        ))}
    </div>
  )
}

export default FAQaccordions