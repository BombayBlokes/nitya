"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import "./Header.css";
import { useState } from "react";
import logo from "../images/nitya-logo-white2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">
          <Image
            width={117}
            height={100}
            src={logo}
            alt="Nitya Logo"
            style={{ objectFit: "contain" }}
            priority
            className="rounded-full"
          />
        </Link>

        <nav className="nav">
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#programs" className="nav-link">
            Programs
          </Link>
          <Link href="#who-can-enroll" className="nav-link">
            Who Can Enroll?
          </Link>
          <Link href="#success-stories" className="nav-link">
            Success Stories
          </Link>
          <Link href="#blogs" className="nav-link">
            Blogs
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <Link
          href="#form-get-in-touch"
          className="button "
          style={{ marginRight: "1rem" }}
          aria-label="Get Started"
        >
          Get Started
          <ArrowRight className="arrow-icon" />
        </Link>

        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="22" height="22" fill="url(#pattern0_256_1347)" />
            <defs>
              <pattern
                id="pattern0_256_1347"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_256_1347" transform="scale(0.01)" />
              </pattern>
              <image
                id="image0_256_1347"
                width="100"
                height="100"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4klEQVR4nO3dTUtUURgH8BtmLctWJRqUmoKbrC+gBU2QzbTxO4QS9GKK0cKFYG1FainSXpS2vX2JJNT21jLLVfWPw5yBEDlznpe5mf5/MLuR/733eI/4nOeeWxRERERERERERESHHIATAGoApjM+DwFcccg8BuA6gMcZmZMAroWfcci9Gs8h51yrANqtmdID7APwCXLL2oMFcAbAB0XmewAdysx2AK8UmesAejWZ2jtDMxgN88rc14bMVWXmc0Pmeil3CoA7sPkWBlWYeQl2ot9YACcB7Bgzq0WrAXjicHH6hJk1h8yaYlq2milaDcCsw4EOCjPHHDLHhJmDDpmzRatxQEQ4IAm8QxI4ZXnhlCXCKSuBU1YCpywvnLIO3pQVimxWXcLMikPmDWHmeYfMB0Wrhaqt8SA3FJmnAewaMn8AOKXI3TKe6+WiDLFqq/ELwKgyc9pwYSaVmdV4zBpLRVliWXo+FgpzbWgHowHAOIBtQWb47t3CIA7KpiAzXJM5AMctuZZSfH9cwEl9uhwz2wBczMgM32lzzO3KyOwvfXGKiIiIiIiIiIgkHYW12DeV+twMJXSPywqgMxQpMzLDdzqdMjviOTTLrEmbAF3Exmdpr21Yz5g2FjJfCMvhPwEsSltX9+TOKNZi1rQN3tpHAjRd6A3jytyXhsxFZeY9Q+Y7j0chcg4yPJ9hsS0ti6M+TYXfdq3ws+cUZf6vxnMdKVrNuHLXcEGYOeqQeUuYGdZTrKaKVmPXiQgb5RLYKJfARjkvnLJEOGUlcMpK4JTlhVOWCKesozhl8R/DA/aPYdiu4n8snZxVlE6+GM91uCipuBgKZ1qqXlvUq7ZaC8rMCUPmm1KKi3+tD6wqHgmYNJbfF4V3SvjugrH8PhWPXWKltPL7noPtzVygqmiez9hPqNoKFqhE01ST51MqmQtUPR6ZRERERERERETkK26lOpDxQH23Y2ZbqBdlZPY4bxzQnZE5YClkWrfWCJsMfxdUQLes+9ii3msrae8M6xkTDvsUfxZk7sRtR8rb0UG5/TZi53rV0IVe6spdHIzfysxlTabmIMOtabGpXH/ZNWTuSp9PiQtxkjtjP0NFqwF4BDvR3xTUH5axqhzWDcy4s3U+tgEdxTYg3iH5OCAJvEMS2NvrhVOWCKesBE5ZCZyyvPCVRwfvlUf/4qVgfbDrOawvBWuPr4TTmlPmrhkyV5SZoWqr9bG0im/s6dUMypLhxZIdyq77t8YXSy4rB6PcHt94sGEb7qcAnjX53PfYmB71CuxI7Ehvlhm+M+z06tWheA7NMsO1uM3drYmIiIiIiIiIqDgC/gAbchypCZnesgAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </button>
      </header>

      <nav className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <Link href="#about" className="mobile-nav-link" onClick={toggleMenu}>
          About
        </Link>
        <Link href="#programs" className="mobile-nav-link" onClick={toggleMenu}>
          Programs
        </Link>
        <Link
          href="#who-can-enroll"
          className="mobile-nav-link"
          onClick={toggleMenu}
        >
          Who Can Enroll?
        </Link>
        <Link
          href="#success-stories"
          className="mobile-nav-link"
          onClick={toggleMenu}
        >
          Success Stories
        </Link>
        <Link href="#blogs" className="mobile-nav-link" onClick={toggleMenu}>
          Blogs
        </Link>
        <Link href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
          Contact
        </Link>
        <Link href="#form-get-in-touch" className="mobile-button">
          Get Started
          <ArrowRight className="arrow-icon" />
        </Link>
        <br />
        {isMenuOpen && (
          <button
            className="menu-button flex justify-center items-center w-full"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X style={{ zIndex: "100" }} className="menu-icon" />
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;
