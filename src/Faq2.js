import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const Faq2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      "question": "How do I submit a new case?",
      "answer": "To submit a new case, navigate to the 'Submit Case' section and follow the prompts to provide relevant details and documents."
    },
    {
      "question": "Where can I find my case history?",
      "answer": "Your case history can be found in the 'My Cases' section, where you can view details of all the cases you've submitted."
    },
    {
      "question": "How do I update my profile information?",
      "answer": "You can update your profile information by accessing the 'Edit Profile' page and making changes to your personal details."
    },
    {
      "question": "What should I do if I forget my password?",
      "answer": "If you forget your password, you can reset it by clicking on the 'Forgot Password' link on the login page and following the instructions provided."
    },
    {
      "question": "How can I track the cases i have submitted till now?",
      "answer": "You can track the  cases by navigating to the 'History' section, where you'll find real-time updates"
    },
    {
      "question": "Is my personal information shared with anyone?",
      "answer": "No, your personal information is kept confidential and is not shared with anyone outside the platform. We prioritize the privacy and security of our users."
    },
    {
      "question": "What should I do if I encounter technical issues?",
      "answer": "If you encounter technical issues while using the platform, please contact our support team for assistance. You can find the contact information in the 'Support' section."
    },
    {
      "question": "How do I submit feedback or suggestions?",
      "answer": "We welcome your feedback and suggestions for improving our platform. You can submit your feedback through the 'Feedback' form located in the 'Settings' menu."
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

export default Faq2;
