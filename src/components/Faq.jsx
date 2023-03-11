import React, { useState } from 'react'
import FaqCard from './FaqCard'

const Faq = () => {

  const faqs = [
    {
      id: 1,
      question: 'What is Bookmark?',
    },
    {
      id: 2,
      question: 'How can I request a new browser?',
    },
    {
      id: 3,
      question: 'Is there a mobile app?',
    },
    {
      id: 4,
      question: 'What about other Chromium browsers?',
    }
  ]

  const [currTab, setCurrTab] = useState(-1)

  return (
    <div className="mt-32 w-[85%] mx-auto text-center">
      <h1 className="heading">Frequently Asked Questions</h1>
      <p className="description">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>
      <ul className="divide-y text-left lg:max-w-2xl lg:mx-auto">
        {
          faqs.map(faq => <FaqCard key={faq.id} {...faq} currTabListener={(id) => setCurrTab(prevTab => prevTab===id ? -1 : id)} isOpen={currTab===faq.id} />)
        }
        <li className=""></li>
        <button className="primary-btn mt-20 block mx-auto px-6 py-4 md:py-2">
          More Info
        </button>
      </ul>

    </div>
  )
}

export default Faq