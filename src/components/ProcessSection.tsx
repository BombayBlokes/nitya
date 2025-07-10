"use client";

import "./ProcessSection.css";
import { useState, useEffect, TouchEvent, useCallback } from "react";

// Define the types for the steps prop
interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: Step[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  // Auto-scroll
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % steps.length;
        handleSlideChange(nextSlide);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, steps.length, currentSlide, handleSlideChange]);

  // Touch handlers for mobile
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < steps.length - 1) {
      handleSlideChange(currentSlide + 1);
    }

    if (isRightSwipe && currentSlide > 0) {
      handleSlideChange(currentSlide - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse handlers for desktop
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
      if (scrollLeft > 0 && currentSlide > 0) {
        handleSlideChange(currentSlide - 1);
      } else if (scrollLeft < 0 && currentSlide < steps.length - 1) {
        handleSlideChange(currentSlide + 1);
      }
    }
    setScrollLeft(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setScrollLeft(0);
  };

  const handleDotClick = (index: number) => {
    handleSlideChange(index);
  };

  const slideStyle = {
    transform: isDragging 
      ? `translateX(calc(-${currentSlide * 100}% + ${scrollLeft}px))` 
      : `translateX(-${currentSlide * 100}%)`,
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
  };

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">Onboarding Process</h2>
          <p className="process-subtitle">NITYA&apos;s 4-Step Process</p>
        </div>

        {!isMobile ? (
          <div className="process-grid">
            {steps.map((step) => (
              <div key={step.id} className="process-step">
                <div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                </div>
                <div className="process-step-number">0{step.id}</div>
              </div>
            ))}
          </div>
        ) : (
          <><div className="process-slide-container">
              <div
                className="process-slide-wrapper"
                style={slideStyle}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`process-step ${index === currentSlide ? "process-step--active" : ""} ${isTransitioning ? "process-step--transitioning" : ""}`}
                  >
                    <div>
                      <h3 className="process-step-title">{step.title}</h3>
                      <p className="process-step-description">{step.description}</p>
                    </div>
                    <div className="process-step-number">0{step.id}</div>
                  </div>
                ))}
              </div>

            </div><div className="process-slide-dots">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`process-slide-dot ${index === currentSlide ? "process-slide-dot--active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div></>
        )}
      </div>
    </section>
  );
};

export default ProcessSection;
