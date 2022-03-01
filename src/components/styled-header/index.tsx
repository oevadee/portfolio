import React, { ReactNode } from "react";
import styled from "styled-components";

const SHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.bigger};
  margin-bottom: 1.25rem;
`;

interface Props {
  children: ReactNode;
}

export const StyledHeader = ({ children }: Props) => (
  <SHeader>{children}</SHeader>
);
