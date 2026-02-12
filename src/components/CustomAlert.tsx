import React from "react";
import { X } from "lucide-react";
import "./CustomAlert.css";
import Image from "next/image";

interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert">
        <button onClick={onClose} className="custom-alert-close">
          <X size={24} />
        </button>
        <br />
        <div className="custom-alert-content">
          <h3>Thank You for Connecting with NITYA!</h3>
          <p className="message-primary">You&apos;ve taken the first step towards upskilling and unlocking new opportunities.</p>
          <p className="message-secondary">Our team will reach out to you soon.</p>
          <div className="custom-alert-buttons"> 
  <button onClick={onDownload} className="custom-alert-button">
    Download Brochure
   <Image
  src="/favicons/download.svg"
  alt="Download Icon"
  width={20}
  height={20}
  className="download-icon"
/>

  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default CustomAlert; 