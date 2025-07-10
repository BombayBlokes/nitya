"use client";
import "./EnrollSection.css";
import RotatingCircle from "./RotatingCircle";

const EnrollSection = () => {
  return (
    <section className="enroll-section">
      <div className="enroll-container">
        <h2 className="enroll-title">Who Can Enroll?</h2>

        <RotatingCircle />  
      </div>
    </section>
  );
};

export default EnrollSection;
