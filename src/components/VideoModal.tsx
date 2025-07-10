"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import "./VideoModal.css";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`video-modal-overlay ${isOpen ? "video-modal-overlay--visible" : ""}`}
      onClick={onClose}
    >
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X className="video-modal-close-icon" style={{ color: "var(--text-color)" }} />
        </button>
        <div className="video-modal-wrapper">
          <iframe
            className="video-modal-iframe"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
