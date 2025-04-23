import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import Introductory from "../components/Introductory.jsx";
import Trusted from "../components/Trusted.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import SectionDivider from "../components/SectionDivider.jsx"; // <- Import here

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Smartwave Tutors Hub | Personalized Academic Help</title>
        <meta
          name="description"
          content="Get expert help with online classes, exams, assignments & more. Available 24/7!"
        />
        <meta
          name="keywords"
          content="online class help, exam assistance, tutoring, essay writing"
        />
        <meta property="og:title" content="Smartwave Tutors Hub" />
        <meta
          property="og:description"
          content="Expert tutoring services, assignment help, and exam guidance tailored for students worldwide."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://onlinetutorshub.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smartwave Tutors Hub" />
        <meta
          name="twitter:description"
          content="Learn from expert tutors and get assignment help online."
        />
        <meta name="twitter:image" content="/images/twitter-card.png" />
      </Helmet>

      <div className="mt-20">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <SectionDivider />
        <Introductory />
        <SectionDivider />
        <Trusted />
        <SectionDivider />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default Home;
