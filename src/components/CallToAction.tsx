"use client";

import { ArrowRight } from "lucide-react";
import "./CallToAction.css";
import Link from "next/link";
const CallToAction = () => {
  return (
    <div className="cta-container md:hidden sticky z-10 bottom-0 grid grid-cols-2 gap-2 p-2 ">
      <h2 className="cta-title font-bold">Level up your skills with us!</h2>
      <Link href="#form-get-in-touch" className="cta-button">
        Get In Touch
        <ArrowRight className="cta-arrow" />
      </Link>
    </div>
  );
};

export default CallToAction; 