import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { StyledHeader } from 'components/styled-header';
import { ProjectCard } from './components/project-card';
import { sampleProjectTechnologies } from 'constants/technologies';
import { StyledButton } from 'components/styled-button';

const SSection = styled.section`
  margin-top: 8.125rem;
`;

const SProjectsWrapper = styled.div`
  display: flex;
  gap: 1.75rem;
  margin-bottom: 2.375rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      sampleProject: file(relativePath: { eq: "sample-project.png" }) {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);
  return (
    <SSection>
      <StyledHeader>Projects</StyledHeader>
      <SProjectsWrapper>
        <ProjectCard
          image={data.sampleProject.childImageSharp.gatsbyImageData}
          header="TITLE PROJECT"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          technologies={sampleProjectTechnologies}
        />
        <ProjectCard
          image={data.sampleProject.childImageSharp.gatsbyImageData}
          header="TITLE PROJECT"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          technologies={sampleProjectTechnologies}
        />
      </SProjectsWrapper>
      <SButtonWrapper>
        <StyledButton to="/projects">See all projects</StyledButton>
      </SButtonWrapper>
    </SSection>
  );
};
