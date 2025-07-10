"use client";

import Image from "next/image";
import "./ProgramArchitects.css";
import { useEffect, useState } from "react";
import prodipta from "../images/prodipta.png";
import archana from "../images/archana.png";

const architects = [
  {
    name: "Prodipta Hore",
    title: "Program Director & Founding Member - ABEA",
    experience: "30+ Years",
    description: [
      "Robotics Advocate",
      "Advocate of creativity in math education and robotics",
      "John Templeton Fellow on Gifted Education, University of Iowa",
      "Co-author of CBSE Math Text Book by NCERT",
      "Coordinator International Initiatives and Head of Faculty - Mathematics at Aditya Birla World Academy"
    ],
    image: prodipta,
  },
  {
    name: "Archana Awade",
    title: "General Manager – Curriculum & Training at ABEA",
    experience: "25+ Years",
    description: [
      "Expert in CBSE, ICSE, IB & IGCSE institutional design",
      "Certified Trainer & IGCSE Specialist",
      "Lead auditor for chain of schools",
    ],
    image: archana,
  },
];

const ProgramArchitects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check on first render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={isMobile ? "program-architects-mobile-section" : "program-architects-section"}>
      <div className={isMobile ? "program-architects-mobile-content" : "program-architects-content"}>
        <h2 className={isMobile ? "program-architects-mobile-title" : "program-architects-title"}>Program Architects</h2>
        <p className={isMobile ? "program-architects-mobile-description" : "program-architects-description"}>
        Our expert-led teaching team is built by educators, for educators bringing real classroom experience, deep subject expertise, and innovative strategies to empower teachers. Comprising principals, directors, and educational leaders, our mentors bridge skill gaps, introduce future-ready teaching methods, and ensure impactful learning outcomes.
        </p>
      </div>

      {!isMobile ? (
        <div className="program-architects-cards-container">
          {architects.map((architect, index) => (
            <div key={index} className="program-architects-card">
              <Image
                src={architect.image}
                alt={architect.name}
                width={120}
                height={120}
                className="program-architects-card-image"
              />
              <div className="program-architects-card-content">
                <h3>
                  {architect.name}
                  <span className="program-architects-experience-badge">
                    {architect.experience}
                  </span>
                </h3>
                <p className="program-architects-position-title">{architect.title}</p>
                <ul>
                {architect.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              </div>
             
            </div>
          ))}
        </div>
      ) : (
        <div className="program-architects-mobile-cards">
          {architects.map((architect, index) => (
            <div key={index} className="program-architects-mobile-card">
              <Image
                src={architect.image}
                alt={architect.name}
                width={80}
                height={80}
              />
              <div>
                <h3>
                  {architect.name}
                  <span className="program-architects-mobile-experience">
                    {architect.experience}
                  </span>
                </h3>
                <p className="program-architects-mobile-position">{architect.title}</p>
              </div>
              <ul>
                {architect.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProgramArchitects;
