"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import "./ProgramsSection.css";
import thumb1 from "../images/NTT_Nitya-Reels-01_Thumbnail.png";
import thumb2 from "../images/NTT_Nitya-Reels-02.png";
import thumb3 from "../images/NTT_Nitya-Reels-03.jpg";

import Link from "next/link";

const videos = [
  {
    thumbnail: thumb1.src,
    alt: "Teacher using technology in classroom",
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/38a77c95336c48d1ae9a2c427ba66e33.mp4",
  },
  {
    thumbnail: thumb3.src,
    alt: "Teacher using technology in classroom",
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/4c79ca0baafd4b10b5a29687ef35e79b.mp4",
  },
  {
    thumbnail: thumb2.src,
    alt: "Teacher using technology in classroom",
    videoUrl:
      
      "https://cdn.shopify.com/videos/c/o/v/71b3a8675ca14de0abbcf94e5b901c31.mp4",
  },
];

const ProgramsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % videos.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isMobile]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

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
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <div className="programs-title-wrapper">
            <h2 className="programs-title">
              A Customized, Need-Based Approach to Teacher Training
            </h2>
            <p className="programs-description">
              NITYA ensures training isn&apos;t just a one-time session but a
              continuous learning journey. Our programs are designed by educators,
              for educators—ensuring practical, classroom-ready solutions.
            </p>
          </div>
        </div>

        {/* Video Section */}
        {isMobile ? (
          // Mobile View: Slider
          <div className="programs-video-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className={`programs-slide ${
                  index === currentSlide ? "programs-slide--active" : ""
                }`}
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="programs-video-wrapper">
                  <video className="programs-video" poster={video.thumbnail}>
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                  <div className="programs-play-overlay">
                    <Play size={48} className="programs-play-icon" />
                  </div>
                </div>
              </div>
            ))}

            <div className="programs-slide-controls">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`programs-slide-dot ${
                    index === currentSlide ? "programs-slide-dot--active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop View: Grid
          <div className="programs-video-grid">
            {videos.map((video, index) => (
              <div
                key={index}
                className="programs-grid-item"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="programs-video-wrapper">
                  <video className="programs-video" poster={video.thumbnail}>
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                  <div className="programs-play-overlay">
                    <Play size={48} className="programs-play-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <br/>
      <br/>
      <div className="flex justify-center items-center mx-auto w-full">
      <Link href="#about" className="programs-button button">
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
      

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideo}
      />
    </section>
  );
};

export default ProgramsSection;
