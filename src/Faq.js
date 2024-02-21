import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What do i do with PIL cases?',
      answer: 'PIL case feature helps you easily understand and create transpirancy about a case which is being a national issue',
    },
    {
      question: "Why isn't there a sign up page for me?",
      answer: 'There is no general sign up page as the sign up is done by the Government officials and can be done only if you are a lawyer or a judge',
    },
    {
      "question": "What services does this platform offer?",
      "answer": "Our platform offers a range of services including case management, and access to legal resources."
    },
    {
      "question": "How can I get started with using this platform?",
      "answer": "Getting started is easy! Simply sign up for an account and follow the on-screen instructions to begin accessing our services but is only possible if you are a lawyer or a judge or team will catch up with the courts whenever there are lawyers and judges who want to join us"
    },
    {
      "question": "Is this platform accessible on mobile devices?",
      "answer": "Yes, our platform is fully responsive and can be accessed on any device, including smartphones and tablets."
    },
    {
      "question": "Can I access legal assistance through this platform?",
      "answer": "It can only be accessed by  the people of the courts."
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
