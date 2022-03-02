import { ProjectCard } from 'components/project-card';
import { StyledHeader } from 'components/styled-header';
import { sampleProjectTechnologies } from 'constants/technologies';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SSection = styled.section`
  height: calc(100vh - ${({ theme }) => theme.dimentions.nav});
  padding: 4rem 0;
`;

const SProjectsWrapper = styled.div`
  display: grid;
  gap: 1.75rem;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 2.375rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsView = () => {
  const data = useStaticQuery(graphql`
    query AllProjects {
      sampleProjectAll: file(relativePath: { eq: "sample-project.png" }) {
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
          image={data.sampleProjectAll.childImageSharp.gatsbyImageData}
          header="DUMMY PROJECT"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          technologies={sampleProjectTechnologies}
        />
        <ProjectCard
          image={data.sampleProjectAll.childImageSharp.gatsbyImageData}
          header="DUMMY PROJECT"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          technologies={sampleProjectTechnologies}
        />
        <ProjectCard
          image={data.sampleProjectAll.childImageSharp.gatsbyImageData}
          header="DUMMY PROJECT"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          technologies={sampleProjectTechnologies}
        />
        <ProjectCard
          image={data.sampleProjectAll.childImageSharp.gatsbyImageData}
          header="DUMMY PROJECT"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          technologies={sampleProjectTechnologies}
        />
      </SProjectsWrapper>
    </SSection>
  );
};
