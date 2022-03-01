import { Link } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";

const SLink = styled(Link)`
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.darkText};
  border-radius: 0.375rem;
  width: fit-content;
`;

interface Props {
  to: string;
  children: ReactNode;
}

export const StyledButton = ({ to, children }: Props) => {
  return <SLink to={to}>{children}</SLink>;
};
