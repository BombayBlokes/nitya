"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, FastForward, Play } from "lucide-react";
import "./ImpactSection.css";
import Link from "next/link";

const ImpactSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const impactPoints = [
    {
      id: 1,
      text: "Keeps teachers updated with new methodologies",
      highlight: "updated",
    },
    {
      id: 2,
      text: "Boosts engagement & classroom effectiveness",
      highlight: "engagement & classroom effectiveness",
    },
    {
      id: 3,
      text: "Strengthens management & tech skills",
      highlight: "management & tech skills",
    },
    {
      id: 4,
      text: "Improves student performance & critical thinking",
      highlight: "student performance & critical thinking",
    },
    {
      id: 5,
      text: "Enhances motivation & holistic growth",
      highlight: "motivation & holistic growth",
    },
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        {/* VIDEO SECTION */}
        <div className="impact-image-container">
          {!playVideo ? (
            <div
              className="relative w-full overflow-hidden rounded-xl cursor-pointer"
              style={{ aspectRatio: "16/9" }}
              onClick={() => setPlayVideo(true)}
            >
              <Image
                src="https://img.youtube.com/vi/fz1b3zseREI/maxresdefault.jpg"
                alt="Impact Video Thumbnail"
                fill
                className="object-cover impact-image"
                priority={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Play className="text-black w-7 h-7 ml-1" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/fz1b3zseREI?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="impact-image"
              style={{ aspectRatio: "16/9" }}
            />
          )}
        </div>

        {/* CONTENT SECTION */}
        <div className="impact-content">
          <h2 className="impact-title">
            Impact Of Upskilled
            <br />
            Teachers On Students
          </h2>

          <div className="impact-list">
            {impactPoints.map((point) => (
              <div key={point.id} className="impact-item">
                <FastForward className="impact-icon" />
                <p className="impact-text">
                  {point.text.split(point.highlight).map((part, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={`${point.id}-part-${i}`}>{part}</span>
                    ) : (
                      <span key={`${point.id}-part-${i}`}>
                        {part}
                        <span className="impact-highlight">
                          {point.highlight}
                        </span>
                      </span>
                    )
                  )}
                </p>
              </div>
            ))}
          </div>

          <br />

          <div className="impact-submit-div">
            <Link href="#form-get-in-touch" className="button">
              Start Your Upskilling Journey
              <ArrowRight size={20} className="impact-arrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
