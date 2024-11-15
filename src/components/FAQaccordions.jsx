import React, { useState, useEffect } from 'react'

const FAQaccordions = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (index) => {
        setIsOpen(prevIndex => prevIndex === index ? false : index)
    }

    const [accordionItems, setAccordionItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordionItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div className="accordions">
    {accordionItems.map((item, index) => (

        <div key={item.id} className="accordion1 border">
            <button className="accordion" onClick={() => toggleOpen(index)}>
                {item.title}
                <i className={`fa-regular fa-chevron-down accordion-arrow ${isOpen === index ? 'active' : ''}`}></i>
            </button>
            <div className={`panel ${isOpen === index ? 'open' : ''}`} >
                <div className="expandable">
                    <p>{item.content}</p>
                </div>
            </div>
        </div>

        ))}
    </div>
  )
}

export default FAQaccordions