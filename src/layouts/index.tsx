import React, { ReactNode } from "react";
import { Navigation } from "modules/navigation";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyles";
import { theme } from "styles/theme";

const SWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 11.75rem;
`;

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SWrapper>
        <Navigation />
        <main>{children}</main>
      </SWrapper>
    </ThemeProvider>
  );
};
