"use client";

import Image from "next/image";
import "./ProgramArchitects.css";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
      "Coordinator International Initiatives and Head of Faculty - Mathematics at Aditya Birla World Academy",
    ],
    image: prodipta,
  },
  {
    name: "Archana Awade",
    title: "General Manager - Curriculum & Training at ABEA",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check on first render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi || !isMobile) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, isMobile]);

  return (
    <section
      className={
        isMobile
          ? "program-architects-mobile-section"
          : "program-architects-section"
      }
    >
      <div
        className={
          isMobile
            ? "program-architects-mobile-content"
            : "program-architects-content"
        }
      >
        <h2
          className={
            isMobile
              ? "program-architects-mobile-title"
              : "program-architects-title"
          }
        >
          Program Architects
        </h2>
        <p className="text-pretty">
          At NITYA, our programs are crafted and led by a team of expert
          educators who understand the realities of today's classrooms. With
          backgrounds as principals, directors, subject specialists, and
          educational leaders, they bring both deep expertise and practical
          strategies to empower teachers and drive lasting impact.
        </p>

        {isMobile ? (
          <div className="architects-carousel-wrapper">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <div className="architect-category">
                    <div className="architect-icon">
                      <img
                        src="/program-svg/team.svg"
                        alt="Principals & Directors"
                      />
                    </div>
                    <h3 className="architect-title">Principals & Directors</h3>
                    <p className="architect-description">
                      Visionary leaders shaping teaching practices with proven
                      school leadership experience
                    </p>
                  </div>
                </div>

                <div className="embla__slide">
                  <div className="architect-category">
                    <div className="architect-icon">
                      <img
                        src="/program-svg/experts.svg"
                        alt="Subject Experts"
                      />
                    </div>
                    <h3 className="architect-title">Subject Experts</h3>
                    <p className="architect-description">
                      Specialists who bring clarity, depth, and mastery across
                      disciplines
                    </p>
                  </div>
                </div>

                <div className="embla__slide">
                  <div className="architect-category">
                    <div className="architect-icon">
                      <img src="/program-svg/solutions.svg" alt="Innovators" />
                    </div>
                    <h3 className="architect-title">Innovators</h3>
                    <p className="architect-description">
                      Educators introducing future-ready methods that keep
                      learning relevant
                    </p>
                  </div>
                </div>

                <div className="embla__slide">
                  <div className="architect-category">
                    <div className="architect-icon">
                      <img src="/program-svg/mentoring.svg" alt="Mentors" />
                    </div>
                    <h3 className="architect-title">Mentors</h3>
                    <p className="architect-description">
                      Guides who close skill gaps and build teacher confidence
                      with practical tools
                    </p>
                  </div>
                </div>

                <div className="embla__slide">
                  <div className="architect-category">
                    <div className="architect-icon">
                      <img
                        src="/program-svg/team-leader.svg"
                        alt="Impact-Driven Leaders"
                      />
                    </div>
                    <h3 className="architect-title">Impact-Driven Leaders</h3>
                    <p className="architect-description">
                      Committed to ensuring measurable improvements in classroom
                      outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="architects-grid">
            <div className="architect-category">
              <div className="architect-icon">
                <img src="/program-svg/team.svg" alt="Principals & Directors" />
              </div>
              <h3 className="architect-title">Principals & Directors</h3>
              <p className="architect-description">
                Visionary leaders shaping teaching practices with proven school
                leadership experience
              </p>
            </div>

            <div className="architect-category">
              <div className="architect-icon">
                <img src="/program-svg/experts.svg" alt="Subject Experts" />
              </div>
              <h3 className="architect-title">Subject Experts</h3>
              <p className="architect-description">
                Specialists who bring clarity, depth, and mastery across
                disciplines
              </p>
            </div>

            <div className="architect-category">
              <div className="architect-icon">
                <img src="/program-svg/solutions.svg" alt="Innovators" />
              </div>
              <h3 className="architect-title">Innovators</h3>
              <p className="architect-description">
                Educators introducing future-ready methods that keep learning
                relevant
              </p>
            </div>

            <div className="architect-category">
              <div className="architect-icon">
                <img src="/program-svg/mentoring.svg" alt="Mentors" />
              </div>
              <h3 className="architect-title">Mentors</h3>
              <p className="architect-description">
                Guides who close skill gaps and build teacher confidence with
                practical tools
              </p>
            </div>

            <div className="architect-category">
              <div className="architect-icon">
                <img
                  src="/program-svg/team-leader.svg"
                  alt="Impact-Driven Leaders"
                />
              </div>
              <h3 className="architect-title">Impact-Driven Leaders</h3>
              <p className="architect-description">
                Committed to ensuring measurable improvements in classroom
                outcomes
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramArchitects;
