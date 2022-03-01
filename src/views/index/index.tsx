import React from "react";
import { AboutMeSection } from "./sections/about-me-section";
import { IntroSection } from "./sections/intro-section";
import { ProjectsSection } from "./sections/projects-section";

export const IndexView = () => {
  return (
    <div>
      <IntroSection />
      <AboutMeSection />
      <ProjectsSection />
    </div>
  );
};
