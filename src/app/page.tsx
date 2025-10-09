import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import EnrollSection from "@/components/EnrollSection";
import ImpactSection from "@/components/ImpactSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import ProcessSection from "@/components/ProcessSection";
import SuccessSection from "@/components/SuccessSection";

import ProgramArchitects from "@/components/ProgramArchitects";
// import CallToAction from "@/components/CallToAction";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CredentialsSection from "@/components/CredentialsSection";
import Blogs from "@/components/Blogs";

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
    <>
      <main>
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
      </main>
      {/* <CallToAction /> */}
    </>
  );
}
