import React from "react";
import styled from "styled-components";
import { StyledHeader } from "components/styled-header";

const SSection = styled.section`
  margin-top: 16.4375rem;
`;

const SParagraph = styled.p`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.medium};
  text-align: justify;

  &:after {
    content: "";
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
        The long barrow was built on land previously inhabited in the Mesolithic
        period. It consisted of a sub-rectangular earthen tumulus, estimated to
        have been 15 metres (50 feet) in length, with a chamber built from
        sarsen megaliths on its eastern end. Both inhumed and cremated human
        remains were placed within this chamber during the Neolithic period,
        representing at least nine or ten individuals.
      </SParagraph>
    </SSection>
  );
};
