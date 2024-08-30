import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQues = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Will I learn how to pick winning stocks?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempore minima. Non dolorem expedita repudiandae dolores autem? Aperiam, non!"
    },
    {
      question: "What is a trading class, and who is it for?",
      answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempore minima. Non dolorem expedita repudiandae dolores autem? Aperiam, non!"
    },
    {
      question: "What will I learn in a trading class?",
      answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempore minima. Non dolorem expedita repudiandae dolores autem? Aperiam, non!"
    },
    {
      question: "How do I securely store my cryptocurrencies?",
      answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempore minima. Non dolorem expedita repudiandae dolores autem? Aperiam, non!"
    },
    {
      question: "Will I learn how to pick winning stocks?",
      answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempore minima. Non dolorem expedita repudiandae dolores autem? Aperiam, non!"
    },

  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="text-center mb-8">
        <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-md">FAQ QUESTION ❓</span>
        <h2 className="text-4xl font-bold mt-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
     
      
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-left text-lg text-green-800"
          >
            <span>{faq.question}</span>
            <span className="ml-2">
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {activeIndex === index && (
            <div className="mt-4 text-gray-700">
              {faq.answer}
            </div>
            
          )}
          
        </div>
        
      ))}

<div className='mt-10 text-center w-full'>
  <a 
    href="#" 
    className='text-white rounded-md py-4 px-20 bg-[#0e3b43] w-full sm:px-12 md:px-24 lg:px-64 hover:bg-green-400'>
    Explore All FAQ →
  </a>
</div>

      

    </div>
  );
};

export default FAQues;
