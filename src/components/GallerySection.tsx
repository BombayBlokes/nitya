"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./GallerySection.css";
import Image from "next/image";

const galleryImages = [
  { src: "/gallery/1.png", alt: "Nitya Gallery Image 1" },
  { src: "/gallery/2.png", alt: "Nitya Gallery Image 2" },
  { src: "/gallery/3.png", alt: "Nitya Gallery Image 3" },
  { src: "/gallery/4.png", alt: "Nitya Gallery Image 4" },
  { src: "/gallery/5.png", alt: "Nitya Gallery Image 5" },
  { src: "/gallery/6.png", alt: "Nitya Gallery Image 6" },
  { src: "/gallery/7 (1).png", alt: "Nitya Gallery Image 7" },
  { src: "/gallery/8.png", alt: "Nitya Gallery Image 8" },
  { src: "/gallery/9.png", alt: "Nitya Gallery Image 9" },
  { src: "/gallery/10.png", alt: "Nitya Gallery Image 10" },
  { src: "/gallery/11.png", alt: "Nitya Gallery Image 11" },
  { src: "/gallery/12.png", alt: "Nitya Gallery Image 12" },
  { src: "/gallery/13.png", alt: "Nitya Gallery Image 13" },
  { src: "/gallery/14.png", alt: "Nitya Gallery Image 14" },
  { src: "/gallery/15.png", alt: "Nitya Gallery Image 15" },
  { src: "/gallery/16.png", alt: "Nitya Gallery Image 16" },
  { src: "/gallery/17.png", alt: "Nitya Gallery Image 17" },
  { src: "/gallery/18.png", alt: "Nitya Gallery Image 18" },
  { src: "/gallery/19.png", alt: "Nitya Gallery Image 19" },
  { src: "/gallery/20.png", alt: "Nitya Gallery Image 20" },
];

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // detect if section is visible
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // autoplay only when visible
  useEffect(() => {
    if (!emblaApi || !isVisible) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isVisible]);

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Training Gallery</h2>
          <p className="gallery-description">
            Explore our comprehensive teacher training programs through these
            visual insights into our workshops and learning sessions.
          </p>
        </div>

        <div className="gallery-carousel-wrapper">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {galleryImages.map((image, index) => (
                <div key={index} className="embla__slide">
                  <div className="gallery-image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="gallery-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;