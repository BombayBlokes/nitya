import Link from "next/link";
import { JSX } from "react";
import { ArrowRight, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | NITYA Teacher Training",
  description:
    "Oops! The page you’re looking for doesn’t exist. Return to the NITYA homepage and explore our teacher training programs and workshops.",
};
export default function NotFound(): JSX.Element {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
        Oops! You’re on the wrong page 😅
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        The page you are looking for doesn’t exist.
      </p>

      <Link
          href="#form-get-in-touch "
          className="button "
          style={{ marginRight: "1rem" , marginTop: "1rem"}}
          aria-label="Get Started"
        >
          Get Started
          <ArrowRight className="arrow-icon" />
        </Link>
    </div>
  );
}
