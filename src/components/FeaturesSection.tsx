"use client";
import "./FeaturesSection.css";
import Image from "next/image";
import { useEffect, useState, TouchEvent, MouseEvent } from "react";
import warm from "../images/Warm.svg";
import butterfly from "../images/Butterfly.svg";
import direction from "../images/Direction.svg";
import subtract from "../images/subtract-green.svg";
import depth from "../images/Depth.svg";
import logo from "../images/nitya-logo.png";

const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allCards = [
    {
      title: "Consultative Approach",
      text: "Designed with educators, for educators.",
      icon: warm,
      alt: "Audio Waveform",
      className: `features-card features-card-large features-card-green`,
    },
    {
      title: "Need-Based Curriculum",
      text: "Evolving with modern educational demands.",
      icon: butterfly,
      alt: "Butterfly Icon",
      className: `features-card features-card-large features-card-blue`,
    },
    {
      title: "Continuous Training Model",
      text: "A lasting framework for continuous upskilling",
      icon: direction,
      alt: "Direction Icon",
      className: `features-card features-card-small features-card-orange`,
    },
    {
      title: "Trusted Content Backed by Legacy",
      text: "Built on Navneet's expertise in educational contents",
      icon: subtract,
      alt: "Sparkle Icon",
      className: `features-card features-card-small features-card-blue`,
    },
    {
      title: "Hands-on Learning & Practical Strategies",
      text: "Beyond theory, training sessions include case studies, role plays, and problem-solving scenarios.",
      icon: depth,
      alt: "Direction Icon",
      className: `features-card features-card-small features-card-green`,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % allCards.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, allCards.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleSwipeEnd(touchStart - touchEnd);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setDragEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleSwipeEnd(dragStart - dragEnd);
      setIsDragging(false);
      setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleSwipeEnd(dragStart - dragEnd);
      setIsDragging(false);
      setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
    }
  };

  const handleSwipeEnd = (swipeDistance: number) => {
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped/dragged left - go to next slide
        setCurrentSlide((prev) => (prev + 1) % allCards.length);
      } else {
        // Swiped/dragged right - go to previous slide
        setCurrentSlide(
          (prev) => (prev - 1 + allCards.length) % allCards.length
        );
      }
    }
  };

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          What Sets{" "}
          <Image
            src={logo}
            alt="Nitya Logo"
            width={100}
            height={100}
            className="features-logo "
          />{" "}
          Apart?
        </h2>
        {/* <p className="features-description text-center max-w-2xl mx-auto">
          Built on Aditya Birla Education Academy&apos;s leadership in teacher training
          and Navneet Education Limited&apos;s expertise in educational content
        </p> */}
        <br />
        <br />
        {isMobile ? (
          <>
            <div
              className="features-grid"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              {allCards.map((card, index) => (
                <div
                  key={index}
                  className={`${card.className} ${
                    index === currentSlide
                      ? "active"
                      : index < currentSlide
                      ? "prev"
                      : "next"
                  }`}
                >
                  <div>
                    <h3 className="features-card-title">{card.title}</h3>
                    <p className="features-card-text">{card.text}</p>
                  </div>
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={200}
                    height={200}
                    className="features-decorative-icon"
                  />
                </div>
              ))}
            </div>
            <div className="features-slide-controls">
              {allCards.map((_, index) => (
                <div
                  key={index}
                  className={`features-slide-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="features-grid">
              <div className="features-card features-card-large features-card-green">
                <div>
                  <h3 className="features-card-title">
                    Trusted Content Backed By Legacy
                  </h3>
                  <p className="features-card-text">
                    Built on Navneet&apos;s expertise in educational content
                    leadership in teacher training
                  </p>
                </div>
                <Image
                  src={warm}
                  alt="Audio Waveform"
                  width={200}
                  height={200}
                  className="features-decorative-icon"
                />
              </div>

              <div className="features-card features-card-large features-card-blue">
                <div>
                  <h3 className="features-card-title">
                    Hands-On Learning & Practical Strategies
                  </h3>
                  <p className="features-card-text">
                    Beyond theory, training sessions include case studies, role
                    plays, and problem-solving scenarios.
                  </p>
                </div>
                <Image
                  src={butterfly}
                  alt="Butterfly Icon"
                  width={200}
                  height={200}
                  className="features-decorative-icon"
                />
              </div>
            </div>

            <div className="features-bottom-grid">
              <div className="features-card features-card-small features-card-orange">
                <div>
                  <h3 className="features-card-title">Need-Based Curriculum</h3>
                  <p className="features-card-text">
                    Evolving with modern educational demands.
                  </p>
                </div>
                <Image
                  src={direction}
                  alt="Direction Icon"
                  width={200}
                  height={200}
                  className="features-decorative-icon"
                />
              </div>
              <div className="features-card features-card-small features-card-blue">
                <div>
                  <h3 className="features-card-title">Consultative Approach</h3>
                  <p className="features-card-text">
                    Designed with educators, for educators.
                  </p>
                </div>
                <Image
                  src={subtract}
                  alt="Sparkle Icon"
                  width={200}
                  height={200}
                  className="features-decorative-icon"
                />
              </div>

              <div className="features-card features-card-small features-card-green">
                <div>
                  <h3 className="features-card-title">
                    Continuous Training Model
                  </h3>
                  <p className="features-card-text">
                    A lasting framework for continuous upskilling
                  </p>
                </div>
                <Image
                  src={depth}
                  alt="Direction Icon"
                  width={200}
                  height={200}
                  className="features-decorative-icon"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
