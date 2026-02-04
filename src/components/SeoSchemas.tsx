// components/SeoSchemas.tsx
import Script from "next/script";

export default function SeoSchemas() {
  return (
    <>
      {/* Educational Organization */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "NITYA Teacher Training Program",
          "url": "https://www.nityatraining.com/",
          "description":
            "NITYA Teacher Training Program helps educators strengthen their teaching approach through innovative methods and skill-focused professional development.",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        })}
      </Script>

      {/* FAQ Schema */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the NITYA Teacher Training Program?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "NITYA is a comprehensive professional development program designed to enhance teaching effectiveness through modern pedagogical approaches."
              }
            },
            {
              "@type": "Question",
              "name": "Who can enroll in the NITYA program?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "The program is open to all educators, including teachers, coordinators, vice principals, and principals from schools across India."
              }
            }
          ]
        })}
      </Script>

      {/* Video Schema */}
      <Script
        id="schema-video"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name":
            "Innovative Teaching & 21st Century Skills | NITYA Training at MVM School",
          "description":
            "NITYA Teacher Training conducted an interactive session at MVM School, focusing on innovative teaching techniques and 21st-century classroom skills.",
          "thumbnailUrl":
            "https://i.ytimg.com/vi/fz1b3zseREI/maxresdefault.jpg",
          "uploadDate": "2025-08-26",
          "duration": "PT1M15S",
          "contentUrl":
            "https://www.youtube.com/watch?v=b0PMI1N9Ng8"
        })}
      </Script>
    </>
  );
}
