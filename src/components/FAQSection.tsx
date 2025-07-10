"use client";

import { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the NITYA Teacher Training Program?",
      answer: "NITYA is a comprehensive professional development program designed to enhance teaching effectiveness through modern pedagogical approaches, classroom management techniques, and innovative teaching methodologies."
    },
    {
      question: "Who can enroll in the NITYA program?",
      answer: "The program is open to all educators, including teachers, coordinators, vice principals, and principals from schools across India. Both experienced and new educators can benefit from the program."
    },
    {
      question: "What are the program modules and duration?",
      answer: "The program consists of 11 comprehensive modules covering various aspects of teaching and learning. Each module typically spans 1-2 days with 6-12 hours of training, depending on the topic."
    },
    {
      question: "How is the program delivered?",
      answer: "The program is delivered through a combination of interactive workshops, hands-on activities, and practical demonstrations. Sessions are conducted by experienced educators and subject matter experts."
    },
    {
      question: "What certification will I receive?",
      answer: "Upon successful completion of the program, participants receive a certificate jointly endorsed by Navneet Education Limited and Aditya Birla Education Academy, recognizing their professional development."
    },
    {
      question: "How can I register for the program?",
      answer: "You can register through our website by filling out the registration form. For group registrations or institutional inquiries, please contact our program coordinators directly."
    },
    {
      question: "What is the program fee?",
      answer: "The program fee varies based on the modules selected and the number of participants. We offer special rates for group registrations and institutional partnerships."
    },
    {
      question: "Can the program be customized for our school?",
      answer: "Yes, we offer customized training programs tailored to meet the specific needs of schools and educational institutions. Contact us to discuss your requirements."
    }
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedIndex === index}
              >
                {faq.question}
                <span className="faq-icon">{expandedIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: expandedIndex === index ? '500px' : '0',
                  opacity: expandedIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {faqs.length > 4 && (
          <button 
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less FAQs' : 'Show More FAQs'}
          </button>
        )}
      </div>
    </section>
  );
};

export default FAQSection; 