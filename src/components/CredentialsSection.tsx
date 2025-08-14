"use client";

import { useState } from "react";
import Image from "next/image";
import "./CredentialsSection.css";
import certificateImg from "@/images/certificate-new.png";

const CredentialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  return (
    <section className="credentials-section">
      <div className="credentials-container">
        <div className="credentials-content">
          <h2 className="credentials-title">
            Earn Valuable Credentials & Recognition with NITYA
          </h2>
          <p className="credentials-description">
            Complete program milestones and receive certifications that reflect
            your commitment to professional growth.
          </p>
          <p className="credentials-detail">
            Successfully complete all modules and earn your advanced
            certificate by Navneet Education Limited.
          </p>
        </div>
        <div className="credentials-image" onClick={openModal}>
          <Image
            src={certificateImg}
            alt="NITYA Certification"
            width={500}
            height={350}
            className="certificate-img"
          />
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <Image
              src={certificateImg}
              alt="NITYA Certification"
              width={1000}
              height={700}
              className="modal-image"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CredentialsSection;
