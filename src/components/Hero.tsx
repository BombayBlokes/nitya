"use client";
import Image from "next/image";
import quote from "../images/quote.svg";
import star from "../images/subtract.png";
import teacher from "../images/hero1.png";
import abea from "../images/abea-logo.png";
import navneet from "../images/navneet-logo.png";
import curvedArrow from "@/images/arrow.png";
import "./Hero.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [teacherCount, setTeacherCount] = useState(500000);
  const [workshopCount, setWorkshopCount] = useState(1500);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility when component mounts
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Counter for teachers (600,000)
    const teacherInterval = setInterval(() => {
      setTeacherCount((prev) => {
        if (prev < 600000) {
          return Math.min(prev + 200, 600000);
        }
        clearInterval(teacherInterval);
        return prev;
      });
    }, 3);

    // Counter for workshops (3500)
    const workshopInterval = setInterval(() => {
      setWorkshopCount((prev) => {
        if (prev < 3500) {
          return Math.min(prev + 4, 3500);
        }
        clearInterval(workshopInterval);
        return prev;
      });
    }, 3);

    return () => {
      clearInterval(teacherInterval);
      clearInterval(workshopInterval);
    };
  }, [isVisible]);

  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            {/* Program Label */}
            <br className="" />
            <br className="md:block hidden" />
            <br />
            <br />

            <div className="hero-program-label">
              <div className="hero-label-container">
                <span className="hero-label-text">
                  <Image
                    src={star}
                    alt="star Icon"
                    width={30}
                    height={30}
                    className=""
                    sizes="60px"
                  />
                  NITYA Teacher Training Program
                  <Image
                    src={star}
                    alt="star Icon"
                    width={30}
                    height={30}
                    className=""
                    sizes="60px"
                  />
                </span>
              </div>
            </div>

            {/* Heading Section */}
            <div className="hero-heading-section">
              <h1 className="hero-main-heading line-height-normal">
                Nurturing & <br className="md:hidden block" /> Inspiring
                Teachers,
                <br />
                Yielding Achievement
              </h1>
            </div>

            {/* only for mobile devices */}
            <div className="flex flex-col justify-center items-center">
              <p
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "var(--text-color)",
                }}
              >
                A initiative by
              </p>

              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <Link
                    href="https://navneet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={navneet}
                      alt="Navneet Logo"
                      width={120}
                      height={48}
                      style={{ objectFit: "contain" }}
                      priority
                      sizes="160px"
                    />
                  </Link>
                  <p
                    style={{
                      fontWeight: "500",
                      textAlign: "center",
                      fontSize: "0.875rem",
                    }}
                  >
                    Navneet Education
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="hero-main-grid">
              {/* Left Content */}
              <div className="hero-left-content">
                {/* Quote */}
                <div className="hero-quote-section">
                  <div className="hero-quote-symbol">
                    <Image
                      src={quote}
                      alt="Quote Symbol"
                      width={24}
                      height={24}
                      sizes="24px"
                    />
                  </div>

                  <p className="hero-quote-text">
                    Creating Impactful Learning
                    <br />
                    Environments Across Schools
                  </p>
                </div>

                {/* Stats */}
                <div className="hero-stats">
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">
                      {teacherCount.toLocaleString()}+
                    </span>
                    <span className="hero-stat-label">Teachers Trained</span>
                  </div>
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">{workshopCount}+</span>
                    <span className="hero-stat-label">Workshops Conducted</span>
                  </div>
                </div>
              </div>

              {/* Center Image Section */}
              <div className="hero-image-section">
                <div className="hero-image-background" />
                <div className="hero-image-container">
                  <Image
                    src={teacher}
                    alt="Teacher"
                    width={393}
                    height={509}
                    loading="eager"
                    className="hero-main-image"
                    priority
                    quality={75}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 393px"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPTE+Pj4xMzQ4RVhCS0ZWNjU2RUhYX1xfODJgaHBYYFhYXFr/2wBDARUXFx4aHR4eHVpaOCo4WlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <Image
                  src={curvedArrow}
                  alt="Curved Arrow"
                  width={96}
                  height={114}
                  className="hero-curved-arrow"
                />
                <Link
                  href="#form-get-in-touch"
                  className="hero-button"
                  aria-label="Download Brochure"
                >
                  Download Brochure
                  <div>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hero-arrow-icon"
                    >
                      <path
                        d="M7.16699 4.48787C10.3887 8.40133 16.2738 6.92804 16.2738 6.92804M16.2738 6.92804C16.2738 6.92804 12.0553 11.2881 13.8337 16.0349M16.2738 6.92804L4.7585 13.6496"
                        stroke="white"
                        strokeLinejoin="bevel"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Right Content */}
              <div className="hero-right-content">
                <div className="hero-description">
                  <p className="hero-description-text">
                    <br />A initiative by{" "}
                    <span className="hero-highlight">
                      Navneet Education Limited,
                    </span>{" "}
                    offers personalized, need-based training to empower
                    educators in today&apos;s evolving landscape.
                  </p>
                </div>

                <div className="hero-logos">
                  {/* <Link
                    href="https://www.abea.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={abea}
                      alt="ABEA Logo"
                      width={160}
                      height={48}
                      style={{ objectFit: "contain" }}
                      priority
                      sizes="160px"
                    />
                  </Link> */}
                  <Link
                    href="https://navneet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={navneet}
                      alt="Navneet Logo"
                      width={160}
                      height={48}
                      style={{ objectFit: "contain" }}
                      priority
                      sizes="160px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <p className="text-white text-center text-sm px-4">
          <br />
          NITYA Teacher Training Program is a personalized, need-based training
          to empower educators in today&apos;s evolving landscape.
        </p>
        <br />
        <div className="flex flex-col items-center justify-center gap-4">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.39355 18C4.35269 18 3.50108 17.7857 2.83871 17.3571C2.17634 16.9286 1.63226 16.381 1.20645 15.7143C0.733333 14.9048 0.40215 14.0714 0.212903 13.2143C0.0709677 12.3095 0 11.5714 0 11C0 8.66667 0.591398 6.54762 1.77419 4.64286C2.95699 2.7381 4.80215 1.19048 7.30968 0L7.94839 1.28571C6.48172 1.90476 5.2043 2.88095 4.11613 4.21429C3.07527 5.54762 2.55484 6.90476 2.55484 8.28572C2.55484 8.85714 2.62581 9.35714 2.76774 9.78572C3.52473 9.16667 4.4 8.85714 5.39355 8.85714C6.62366 8.85714 7.68817 9.2619 8.5871 10.0714C9.48602 10.881 9.93548 12 9.93548 13.4286C9.93548 14.7619 9.48602 15.8571 8.5871 16.7143C7.68817 17.5714 6.62366 18 5.39355 18ZM17.4581 18C16.4172 18 15.5656 17.7857 14.9032 17.3571C14.2409 16.9286 13.6968 16.381 13.271 15.7143C12.7978 14.9048 12.4667 14.0714 12.2774 13.2143C12.1355 12.3095 12.0645 11.5714 12.0645 11C12.0645 8.66667 12.6559 6.54762 13.8387 4.64286C15.0215 2.7381 16.8667 1.19048 19.3742 0L20.0129 1.28571C18.5462 1.90476 17.2688 2.88095 16.1806 4.21429C15.1398 5.54762 14.6194 6.90476 14.6194 8.28572C14.6194 8.85714 14.6903 9.35714 14.8323 9.78572C15.5892 9.16667 16.4645 8.85714 17.4581 8.85714C18.6882 8.85714 19.7527 9.2619 20.6516 10.0714C21.5505 10.881 22 12 22 13.4286C22 14.7619 21.5505 15.8571 20.6516 16.7143C19.7527 17.5714 18.6882 18 17.4581 18Z"
              fill="#FF9D00"
            />
          </svg>
          <p className="text-white text-center text-sm px-6">
            Creating Impactful Learning Environments Across Schools
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl text-[var(--primary-orange)]">
                {teacherCount.toLocaleString()}+
              </h2>
              <p className="text-sm text-white">Teachers Trained</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl  text-[var(--primary-orange)] ">
                {workshopCount}+
              </h2>
              <p className="text-sm text-white">Workshops Conducted</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
