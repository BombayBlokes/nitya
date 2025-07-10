"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "./SuccessSection.css";
import womanTalking from "../images/medium-shot-senior-man-education-concept.jpg";
import womanTalking1 from "../images/portrait-professor-work-educational-system (1).jpg";

import teacher from "../images/portrait-professor-work-educational-system (2).jpg";
import teacher1 from "../images/portrait-professor-work-educational-system.jpg";

const testimonials = [
  {
    id: 1,
    quote: "NITYA's training completely changed my teaching approach. My students are more engaged than ever!",
    author: "Mrs. Anita Sharma, Senior Educator",
  },
  {
    id: 2,
    quote: "This program helped me create interactive lesson plans that improved my students' critical thinking skills.",
    author: "Mr. Sharan Mehta, CBSE Subject Coordinator",
  },
  {
    id: 3,
    quote: "After completing the Leadership module, I gained confidence in guiding my fellow teachers.",
    author: "Ms. Durga Patel, School Principal",
  },
  {
    id: 4,
    quote: "I learned innovative classroom strategies that increased participation by 60%.",
    author: "Mr. Ramesh Verma, Science Teacher",
  },
  {
    id: 5,
    quote: "The special education module helped me support my neurodiverse students effectively.",
    author: "Ms. Fatima Khan, Inclusion Specialist",
  },
  {
    id: 6,
    quote: "I now implement cutting-edge technology tools that simplify my teaching process.",
    author: "Mr. Gulshan Joshi, ICT Educator",
  },
  {
    id: 7,
    quote: "The CPD framework aligns perfectly with CBSE requirements, making compliance easy.",
    author: "Ms. Diya Kapoor, Curriculum Designer",
  },
  {
    id: 8,
    quote: "I've gained skills that enhance not just my teaching, but also my personal growth.",
    author: "Mr. Anand Srivastav, Language Trainer",
  },
  {
    id: 9,
    quote: "With NITYA, I transitioned from being just a teacher to a mentor for my students.",
    author: "Ms. Aruna Roy, Humanities Educator",
  },
  {
    id: 10,
    quote: "The training improved my classroom management, leading to better student discipline and focus.",
    author: "Mr. Praful Desai, Math",
  },
];

const curveIcon = <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.42653 1.56604C7.72039 1.4952 4.7663 4.89773 4.7663 4.89773C4.7663 4.89773 0.986476 10.2584 1.71287 13.9616C2.8709 19.8652 13.1514 18.736 16.3304 18.8673C18.4237 18.9538 20.1894 15.843 18.8537 14.3055C17.9733 13.2922 16.1401 13.1882 15.4756 13.6609C13.8506 14.8169 12.3123 18.1203 12.3123 18.1203C12.3123 18.1203 9.70917 20.9544 10.2621 24.4491C10.8149 27.9438 14.8195 29.0665 17.146 29.8018C20.8402 30.9693 26.8751 30.4346 27.3382 25.8183C27.5541 23.667 26.7471 22.2999 24.1689 23.4751C21.4522 24.7132 19.767 28.8419 19.767 28.8419C19.767 28.8419 18.1202 32.6446 18.8491 34.9404C19.6261 37.3876 21.1137 39.2947 23.4089 40.4381C25.7041 41.5815 34.1174 43.0785 35.5495 40.0551" stroke="#FF9D00" strokeWidth="3" strokeLinecap="round"/></svg>
const threeline = ''

const star = ''

const decorativeIcons = [
  { id: 1, className: "success-icon-1", icon: curveIcon },
  { id: 2, className: "success-icon-2", icon: threeline },
  { id: 3, className: "success-icon-3", icon: star },
  // { id: 4, className: "success-icon-4", icon: star },
];

const SuccessSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTestimonialChange = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      const nextIndex = (currentTestimonial + 1) % testimonials.length;
      handleTestimonialChange(nextIndex);
    }
    if (isRightSwipe) {
      const nextIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      handleTestimonialChange(nextIndex);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (e.currentTarget as HTMLDivElement).offsetLeft);
    setScrollLeft(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (e.currentTarget as HTMLDivElement).offsetLeft;
    const distance = (x - startX);
    setScrollLeft(distance);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(scrollLeft) > 50) {
      if (scrollLeft > 0) {
        const nextIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        handleTestimonialChange(nextIndex);
      } else {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        handleTestimonialChange(nextIndex);
      }
    }
    setScrollLeft(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setScrollLeft(0);
  };

  // Auto-scroll
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      interval = setInterval(() => {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        handleTestimonialChange(nextIndex);
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentTestimonial, handleTestimonialChange]);

  const testimonialStyle = {
    transform: isDragging ? `translateX(${scrollLeft}px)` : undefined,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <section className="success-section">
      <div className="success-container">
        <div className="success-header">
          <h2 className="success-title">Success Stories</h2>
          <p className="success-subtitle">
            Real impact from NITYA-trained educators
          </p>
        </div>

        <div 
          className="success-testimonial-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`success-testimonial ${isTransitioning ? 'fade-exit' : ''}`}
            style={testimonialStyle}
          >
            <p className="success-quote">
              {testimonials[currentTestimonial].quote}
            </p>
            <p className="success-author">
              {testimonials[currentTestimonial].author}
            </p>
          </div>

          <div className="success-decorative-images">
            <div className="success-image-1">
              <Image
                src={womanTalking}
                alt="Teacher"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="success-image-2">
              <Image
                src={womanTalking1}
                alt="Teacher"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="success-image-3">
              <Image
                src={teacher}
                alt="Teacher"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="success-image-4">
              <Image
                src={teacher1}
                alt="Teacher"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {decorativeIcons.map((icon) => (
              <span key={icon.id} className={icon.className}>
                {icon.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="success-navigation-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`success-dot ${
                index === currentTestimonial ? "success-dot-active" : ""
              }`}
              onClick={() => handleTestimonialChange(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
