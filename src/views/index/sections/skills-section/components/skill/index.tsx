import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const SImage = styled(GatsbyImage)`
  width: 7.5rem;
`;

interface Props {
  image: IGatsbyImageData;
  technology: string;
}

export const Skill = ({ image, technology }: Props) => {
  return (
    <SWrapper>
      <SImage image={image} alt={technology} />
      <p>{technology}</p>
    </SWrapper>
  );
};
