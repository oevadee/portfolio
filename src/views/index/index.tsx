import React from 'react';

import { AboutMeSection } from './sections/about-me-section';
import { IntroSection } from './sections/intro-section';
import { ProjectsSection } from './sections/projects-section';
import { SkillsSection } from './sections/skills-section';

export const IndexView = () => {
  return (
    <>
      <IntroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
};
