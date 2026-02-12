import Link from "next/link";
import { JSX } from "react";

export default function Custom404(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Oops! You’re on the wrong page 😅
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        The page you are looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
