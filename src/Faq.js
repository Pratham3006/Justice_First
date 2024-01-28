import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is an FAQ Page?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi...',
    },
    {
      question: 'Why do you need an FAQ page?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi. skjhcsahjhchsakhckjshcjsahckjhscjs lkcjsa lks nsd c lksc  scnlk c,scm  l;sdc sd lkx ,sdvlk  nlk ,md d ld',
    },
    {
      question: 'Does it improve the user experience of a website?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi...',
    },
  ];

  const handleFaqClick = (index) => {
    // Toggle between adding and removing the "active" class
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <h1 className="faq-heading">FAQ'S</h1>
      <section className="faq-container">
        {faqData.map((faqItem, index) => (
          <div className={`faq-${index + 1}`} key={index}>
            {/* faq question */}
            <h1
              className={`faq-page ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleFaqClick(index)}
            >
              {faqItem.question}
            </h1>
            {/* faq answer */}
            <div
              className="faq-body"
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              <p>{faqItem.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Faq;
