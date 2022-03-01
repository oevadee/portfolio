import { StyledHeader } from 'components/styled-header';
import { useGetSkills } from 'hooks/useGetSkills';
import React from 'react';
import styled from 'styled-components';
import { Skill } from './components/skill';

const SSection = styled.section`
  margin-top: 8.125rem;
`;

const SSkillsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 7rem;
`;

export const SkillsSection = () => {
  const { data, skills } = useGetSkills();
  return (
    <SSection>
      <StyledHeader>Skills</StyledHeader>
      <SSkillsWrapper>
        {skills.map(({ technology, imageName }) => (
          <Skill
            key={technology}
            technology={technology}
            image={data[imageName].childImageSharp.gatsbyImageData}
          />
        ))}
      </SSkillsWrapper>
    </SSection>
  );
};
