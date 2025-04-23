import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import Introductory from "../components/Introductory.jsx";
import Trusted from "../components/Trusted.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";

const Home = () => {
  return (
    <div className="mt-20">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Introductory />
      <TestimonialsSection />
      <Trusted />
    </div>
  );
};

export default Home;
