import React from "react";
import HeroSection from "./components/HeroSection";
import AboutAppSection from "./components/AboutAppSection";
import ConcernedSection from "./components/ConcernedSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutAppSection />
      <ConcernedSection />
    </div>
  );
};

export default Home;
