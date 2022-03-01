import React, { ReactNode } from 'react';
import { Navigation } from 'modules/navigation';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { Footer } from 'modules/footer';

const SWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SMain = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  padding: 0 11.75rem;
`;

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SWrapper>
      <Navigation />
      <SMain>{children}</SMain>
      <Footer />
    </SWrapper>
  </ThemeProvider>
);
