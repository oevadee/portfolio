import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { StyledHeader } from 'components/styled-header';
import { TechnologyTab } from '../technology-tab';

const SWrapper = styled.div`
  width: 32.625rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0.375rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SImage = styled(GatsbyImage)`
  height: 24.25rem;
`;

const STextWrapper = styled.div`
  padding: 1.8125rem 1.625rem;
`;

const SHeader = styled(StyledHeader)`
  color: ${({ theme }) => theme.colors.white};
`;

const STechnologiesWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
`;

const SDescription = styled.p`
  letter-spacing: 4%;
  color: ${({ theme }) => theme.colors.powderBlue};
  text-align: left;
`;

interface Props {
  image: IGatsbyImageData;
  header: string;
  description: string;
  technologies: string[];
}

export const ProjectCard = ({
  image,
  header,
  description,
  technologies,
}: Props) => {
  return (
    <SWrapper>
      <SImage image={image} alt="sample project" />
      <STextWrapper>
        <SHeader>{header}</SHeader>
        <STechnologiesWrapper>
          {technologies.map((el: string) => (
            <TechnologyTab technology={el} />
          ))}
        </STechnologiesWrapper>
        <SDescription>{description}</SDescription>
      </STextWrapper>
    </SWrapper>
  );
};
