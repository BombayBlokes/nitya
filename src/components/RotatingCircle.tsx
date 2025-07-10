"use client"
import React, { useEffect, useRef, useState } from 'react';
import './RotatingCircle.css';

const RotatingCircle: React.FC = () => {
  const [angle, setAngle] = useState<number>(0);
  const [topIndex, setTopIndex] = useState<number>(0);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 90);
      setTopIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.transform = `rotate(${angle}deg)`;

      pointsRef.current.forEach((point) => {
        if (point) {
          const base = point.getAttribute('data-base-transform') || '';
          point.style.transform = `${base} rotate(${-angle}deg)`;
        }
      });
    }
  }, [angle]);

  const points = ['01', '04', '03', '02'];
  const labels = ['Primary, Middle, & Senior School Teachers', 'School Administrators & Leadership Teams', 'Vice Principals & Principals', 'Coordinators & Subject Heads'];

  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="circle-container" ref={circleRef}>
          {points.map((val, i) => (
            <div
              key={i}
              ref={(el) => {
                pointsRef.current[i] = el;
              }}
              className={`point p${i + 1}`}
              data-base-transform={
                i === 0 || i === 2 ? 'translateX(-50%)' : 'translateY(-50%)'
              }
            >
              {val}
            </div>
          ))}
        </div>

        <div className="center-labels">
          {labels.map((label, i) => (
            <h2
              key={i}
              className={`label ${
                i === topIndex
                  ? 'active'
                  : i === (topIndex + 1) % 4
                  ? 'next'
                  : ''
              }`}
            >
              {label}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;
