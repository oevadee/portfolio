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
`;

const STextWrapper = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  gap: 0.625rem;
`;

const SHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.bigger};
  text-transform: uppercase;
`;

const SName = styled.p`
  font-size: 4.5rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const SDescription = styled.p`
  max-width: 34.125rem;
  margin-bottom: 1.75rem;
  letter-spacing: 4%;
  line-height: 1.5rem;
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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </SDescription>
        <StyledButton to="/projects">Contact me</StyledButton>
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
