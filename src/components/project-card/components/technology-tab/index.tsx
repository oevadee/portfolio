import React from "react";
import styled from "styled-components";

const SWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  > p {
    text-transform: uppercase;
    letter-spacing: 12%;
    color: ${({ theme }) => theme.colors.darkText};
    font-size: ${({ theme }) => theme.font.size.smaller};
  }
`;

interface Props {
  technology: string;
}

export const TechnologyTab = ({ technology }: Props) => (
  <SWrapper>
    <p>{technology}</p>
  </SWrapper>
);
