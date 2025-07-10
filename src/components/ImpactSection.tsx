"use client";

import Image from "next/image";
import { ArrowRight, FastForward } from "lucide-react";
import "./ImpactSection.css";
import impactImage from "../images/portrait-teacher-work-educational-system.jpg";
import Link from "next/link";

const ImpactSection = () => {
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
        <div className="impact-image-container">
          <Image
            src={impactImage}
            alt="Teacher leading a collaborative session"
            
            className="impact-image"
            
          />
        </div>

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

          <br/>

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
