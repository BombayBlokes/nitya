"use client";

import { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const faqs = [

  {
    question:
      "What is NAVNEET TOPTECH’s core focus in digital education?",
    answer:
      "We provide integrated digital classroom solutions and Learning Management Systems (LMS) specifically designed for the Indian K-12 ecosystem. The focus is on enhancing conventional teaching with purpose-built technology that addresses real-world classroom challenges across CBSE and state board schools.",
  },

  {
    question:
      "What is NAVNEET TOPTECH’s background and school network?",
    answer:
      "NAVNEET TOPTECH has partnered with over 4,000 schools across CBSE, Maharashtra, and Gujarat state boards to drive digital transformation. This extensive ground-level experience informs a product development philosophy centered on teacher-facing innovation and measurable learning outcomes.",
  },

  {
    question: "What is Navneet TopSchool?",
    answer:
      "Navneet TopSchool is an AI enabled LMS built for CBSE schools that digitizes lesson planning, assessments, and school management into one integrated platform. By reducing administrative overhead, the platform allows teachers and school staff to focus on improving the quality and consistency of academic delivery.",
  },

  {
    question:
      "Is Navneet TopSchool compatible with boards beyond CBSE?",
    answer:
      "Yes, while primarily serving CBSE, Maharashtra, and Gujarat boards, the content supports the NCERT curriculum. It is aligned to NEP 2020 and is designed as per the guidelines of NCF 2023. Schools can book a free demo to evaluate compatibility with their specific curriculum and grade structures before implementation.",
  },

  {
    question:
      "How does NAVNEET TOPTECH support schools during digital adoption?",
    answer:
      "We provide end-to-end onboarding, structured teacher training, and dedicated support to ensure seamless integration of LMS and digital tools. This support framework ensures that administrators and teachers can use the classroom solutions effectively from day one without disrupting academic workflows.",
  },

  {
    question:
      "How do NAVNEET TOPTECH’s solutions align with NEP 2020?",
    answer:
      "The full product suite, including smart classroom software and student record systems, is aligned with NEP 2020 goals of technology integration and competency-based learning. These tools help schools move away from rote instruction toward structured digital transformation and improved learning outcomes.",
  },

  {
    question:
      "What is an Interactive Flat Panel (IFP) and how is it used in schools?",
    answer:
      "An Interactive Flat Panel (IFP) is a touch-enabled smart classroom or a smart board for classrooms. It consolidates the functions of a blackboard, projector, and media screen. It supports interactive teaching, digital writing, and multimedia presentations, acting as the central hardware hub for modern classrooms.",
  },

  {
    question:
      "Are NAVNEET TOPTECH’s software solutions pre-installed on the IFP?",
    answer:
      "Yes, all Navneet digital classroom tools and educational content come pre-integrated within the IFP hardware for immediate use. Teachers can access the complete suite directly on the panel without needing external devices, software downloads, or third-party installations.",
  },

  {
    question:
      "Who is NAVNEET TOPTECH’s Interactive Flat Panel hardware partner?",
    answer:
      "NAVNEET TOPTECH partners with companies like Brio, Cybernetix and Hikvision to provide industry-grade IFP, Smart Panels or AI enabled Smart Boards designed for high-use classroom environments. These partnerships ensure that schools receive durable, high-performance display technology backed by reliable hardware support.",
  },

  {
    question:
      "What are the benefits of using IFPs, smart boards, AI powered panels in classrooms?",
    answer:
      "Digital boards, Smart Panels or IFPs in classroom offer high-resolution displays and multi-touch interaction in classrooms. This self-contained solution simplifies content sharing and lesson delivery by combining top-tier hardware with pre-loaded educational resources for CBSE board, NCERT aligned content.",
  },

  {
    question:
      "How does NAVNEET TOPTECH reduce the daily administrative burden on teachers?",
    answer:
      "NAVNEET TOPTECH provides teachers with pre-built lesson planning, pre-built question banks, AI generated assessments through TopAssess, multimedia content (videos and animations) and instant grading tools to reduce administrative work. By integrating these features into a single dashboard, teachers can shift their focus from manual documentation to student-centric instruction and classroom engagement.",
  },

  {
    question:
      "Does NAVNEET TOPTECH offer mobile apps for students and parents?",
    answer:
      "Yes, the TopSchool ecosystem includes dedicated mobile applications for students, parents, teachers, and school management to ensure 24/7 connectivity. These apps allow for real-time tracking of attendance, fee payments, home assignments, and academic performance, making school-to-home communication seamless.",
  },

  {
    question:
      "What kind of support and warranty is provided for the AI-powered IFPs?",
    answer:
      "All Interactive Flat Panels (IFPs) provided by NAVNEET TOPTECH come with comprehensive hardware warranties and on-site technical support through our partners. We ensure that every school receives regular software updates for NavneetAI and TopClass, keeping the hardware modern and functional for years of classroom use.",
  },
];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

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