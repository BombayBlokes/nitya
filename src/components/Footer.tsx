"use client";

import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import logo from "@/images/nitya-logo-3.png";
import navneet from "../images/navneet-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left Section - Existing Content */}
          <div className="flex flex-col flex-1 md:items-start">
            {/* Logo Section */}
            <div className="footer-logo-section mb-6">
              <Image
                src={logo}
                alt="NITYA Logo"
                width={200}
                height={80}
                className="footer-logo"
              />
            </div>

            {/* Contact Section */}
            <div className="footer-contact-section mb-8">
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
                    sales@nityatraining.com
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
                      A knowledge-driven company delivering educational content
                      and stationery through both print and digital mediums.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section - Mobile Only */}
            <div
              className="md:hidden text-center"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3 className="footer-section-title">Follow Us</h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/reel/DN961-5jcNh/?igsh=ZjVnM2hrcHNncGtl
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLljLM3H6SnPk-bTQ-HeOIQwuTyuzZ6-9F&si=N_4jJjFiilXZFiXc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="YouTube"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section - Only visible on desktop */}
          <div className="hidden md:flex md:flex-col md:min-w-[200px]">
            <h3 className="footer-section-title">Quick Links</h3>
            <div
              className="flex flex-col space-y-2"
              style={{ marginBottom: "3rem" }}
            >
              <Link href="#about" className="footer-link">
                About
              </Link>
              <Link href="#programs" className="footer-link">
                Programs
              </Link>
              <Link href="#who-can-enroll" className="footer-link">
                Who Can Enroll?
              </Link>
              <Link href="#success-stories" className="footer-link">
                Success Stories
              </Link>
              <Link href="#blogs" className="footer-link">
                Blogs
              </Link>
              <Link href="#contact" className="footer-link">
                Contact
              </Link>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="footer-section-title">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/reel/DN961-5jcNh/?igsh=ZjVnM2hrcHNncGtl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLljLM3H6SnPk-bTQ-HeOIQwuTyuzZ6-9F&si=N_4jJjFiilXZFiXc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="YouTube"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
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
