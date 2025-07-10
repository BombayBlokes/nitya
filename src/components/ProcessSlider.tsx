"use client";
import { useState, useEffect, TouchEvent } from "react";
import { Step } from "./types";

interface ProcessSliderProps {
  steps: Step[];
}

const ProcessSlider = ({ steps }: ProcessSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
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
      setCurrentSlide((prev) => prev + 1);
    }

    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="process-slide-container">
      <div
        className="process-slide-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`process-step ${index === currentSlide ? "process-step--active" : ""}`}
          >
            <div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
            <div className="process-step-number">0{step.id}</div>
          </div>
        ))}
      </div>
      <div className="process-slide-dots">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`process-slide-dot ${
              index === currentSlide ? "process-slide-dot--active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessSlider;
