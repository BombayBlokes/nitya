import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

import dynamic from "next/dynamic";

const ProgramsSection = dynamic(() => import("@/components/ProgramsSection"), {
  ssr: false,
});

const EnrollSection = dynamic(() => import("@/components/EnrollSection"), {
  ssr: false,
});

const ImpactSection = dynamic(() => import("@/components/ImpactSection"), {
  ssr: false,
});

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  ssr: false,
});

const ModulesSection = dynamic(() => import("@/components/ModulesSection"), {
  ssr: false,
});

const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  ssr: false,
});

const SuccessSection = dynamic(() => import("@/components/SuccessSection"), {
  ssr: false,
});

const ProgramArchitects = dynamic(
  () => import("@/components/ProgramArchitects"),
  {
    ssr: false,
  }
);

const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  ssr: false,
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  ssr: false,
});

const CredentialsSection = dynamic(
  () => import("@/components/CredentialsSection"),
  {
    ssr: false,
  }
);

const Blogs = dynamic(() => import("@/components/Blogs"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function Home() {
  const stepsData = [
    {
      id: 1,
      title: "Assess Needs",
      description:
        "Schools share their requirements and teachers take a Readiness Survey.",
    },
    {
      id: 2,
      title: "Customize Plan",
      description:
        "Experts design a tailored training program aligned with CBSE & NEP 2020 guidelines.",
    },
    {
      id: 3,
      title: "Execute Training",
      description: "Interactive, in-person workshops conducted by experts.",
    },
    {
      id: 4,
      title: "Review & Grow",
      description:
        "Schools receive impact assessment reports and follow-up sessions.",
    },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />

      <ProgramsSection />

      <div id="who-can-enroll">
        <EnrollSection />
      </div>

      <FeaturesSection />
      <ImpactSection />

      <div id="programs">
        <ProgramArchitects />
      </div>

      <ModulesSection />
      <CredentialsSection />
      <GallerySection />
      <FAQSection />

      <ProcessSection steps={stepsData} />

      <div id="success-stories">
        <SuccessSection />
      </div>

      <Blogs />

      <div id="contact"></div>

      <Footer />
    </main>
  );
}