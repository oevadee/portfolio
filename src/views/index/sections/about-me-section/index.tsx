import React from 'react';
import styled from 'styled-components';
import { StyledHeader } from 'components/styled-header';

const SSection = styled.section`
  margin-top: 14rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
  }
`;

const SParagraph = styled.p`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.medium};
  text-align: justify;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -1rem;
    width: 0.25rem;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 0.125rem;
  }
`;

export const AboutMeSection = () => {
  return (
    <SSection>
      <StyledHeader>About me</StyledHeader>
      <SParagraph>
        I am fascinated with fashion. I like unique/limited pieces of clothing.
        You will notice that when we meet :) I also like to listen to and record
        some music. I take care of one dog "Juice" and one rabbit "Misia". There
        are many more things but lets save it for meeting.
      </SParagraph>
    </SSection>
  );
};
