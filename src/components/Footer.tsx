"use client";

import Image from "next/image";
import "./Footer.css";
import logo from "@/images/nitya-logo-1.png";
import navneet from "../images/navneet-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col md:flex-row gap-4 md:flex-wrap md:justify-between">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <Image
              src={logo}
              alt="NITYA Logo"
              width={200}
              height={80}
              className="footer-logo"
            />
          </div>

          {/* Contact Section */}
          <div className="footer-contact-section">
            <h2 className="footer-contact-title">
              Get in touch with us for any enquiries and question
            </h2>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a
                  href="mailto:feedback@nityatraining.com"
                  className="footer-contact-link"
                >
                  feedback@nityatraining.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Helpline</span>
                <a href="tel:1800-266-6676" className="footer-contact-link">
                  1800-266-6676
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Backed By Section */}
        <div className="footer-backed-by-section">
          <h3 className="footer-backed-by-title">Backed By</h3>
          <div className="footer-partners">
            <div className="footer-partner">
              <Image
                src={navneet}
                alt="Navneet"
                width={150}
                height={80}
                className="footer-partner-logo"
              />
              <div className="footer-partner-info">
                <h4>Navneet Education Limited</h4>
                <p>
                  A knowledge-driven company delivering educational content and
                  stationery through both print and digital mediums.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} NITYA Teacher Training Program. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
