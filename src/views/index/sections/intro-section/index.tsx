import { StyledButton } from 'components/styled-button';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SSection = styled.section`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.3125rem;

  @media (max-width: 1200px) {
    gap: 0;
    margin-top: 2rem;
    flex-direction: column-reverse;
  }
`;

const STextWrapper = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  gap: 0.625rem;

  @media (max-width: 1200px) {
    text-align: center;
    align-items: center;
  }
`;

const SHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.bigger};
  text-transform: uppercase;
`;

const SName = styled.p`
  font-size: ${({ theme }) => theme.font.size.giant};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.biggest};
  }
`;

const SDescription = styled.p`
  max-width: 34.125rem;
  margin-bottom: 1.75rem;
  letter-spacing: 4%;
  line-height: 1.5rem;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const SImage = styled(GatsbyImage)`
  width: 400px;
  height: 400px;
`;

export const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query Nerd {
      nerd: file(relativePath: { eq: "nerd.png" }) {
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
      <STextWrapper>
        <SHeader>Web developer</SHeader>
        <SName>Adrian Szczechura</SName>
        <SDescription>
          I am a selftaught webdeveloper that specialize in 'Reactish' frontend.
          I also like to develop fullstack apps and static-websites.
        </SDescription>
        <StyledButton to="/contact">Contact me</StyledButton>
      </STextWrapper>
      <div>
        <SImage
          image={data.nerd.childImageSharp.gatsbyImageData}
          alt="Software engineer"
        />
      </div>
    </SSection>
  );
};
